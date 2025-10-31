import { ImageResponse } from "next/og";

async function loadAssets(): Promise<
  { name: string; data: Buffer; weight: 400 | 600; style: "normal" }[]
> {
  const [{ base64Font: normal }, { base64Font: mono }, { base64Font: semibold }] =
    await Promise.all([
      import("./geist-regular-otf.json").then((mod) => mod.default || mod),
      import("./geistmono-regular-otf.json").then((mod) => mod.default || mod),
      import("./geist-semibold-otf.json").then((mod) => mod.default || mod),
    ]);

  return [
    {
      name: "Geist",
      data: Buffer.from(normal, "base64"),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Geist Mono",
      data: Buffer.from(mono, "base64"),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Geist",
      data: Buffer.from(semibold, "base64"),
      weight: 600 as const,
      style: "normal" as const,
    },
  ];
}

const highlightedCells = [
  [1, 2],
  [2, 2],
  [2, 3],
  [3, 3],
  [3, 5],
  [6, 1],
  [6, 4],
  [6, 7],
  [8, 7],
  [12, 1],
  [12, 2],
  [13, 2],
  [14, 4],
  [14, 5],
  [15, 4],
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const [fonts] = await Promise.all([loadAssets()]);

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full bg-[#262626] text-white relative"
        style={{ fontFamily: "Geist Sans" }}
      >
        {/* Grid pattern background */}
        <div
          tw="absolute inset-0 border-r border-r-neutral-500/20 border-b border-b-neutral-500/20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(116 116 116 / 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(116 116 116 / 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Highlighted cells */}
        {highlightedCells.map(([col, row], index) => (
          <div
            key={index}
            tw="absolute"
            style={{
              left: `${(col - 1) * 80}px`,
              top: `${(row - 1) * 80}px`,
              width: "80px",
              height: "80px",
              backgroundColor: "rgb(94 94 94 / 0.2)",
            }}
          />
        ))}

        {/* Content */}
        <div tw="flex flex-col absolute w-[896px] justify-center inset-32 z-10">
          <div
            tw="text-neutral-50 tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]"
            style={{
              textWrap: "balance",
              fontWeight: 600,
              fontSize: title && title.length > 20 ? 64 : 80,
              letterSpacing: "-0.04em",
            }}
          >
            {title}
          </div>
          <div
            tw="text-[40px] leading-[1.5] flex-grow-1 text-neutral-400"
            style={{
              fontWeight: 500,
              textWrap: "balance",
            }}
          >
            {description}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 628,
      fonts,
    }
  );
}
