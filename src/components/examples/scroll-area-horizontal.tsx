import Image from "next/image";
import { css } from "styled-system/css";
import { ScrollArea, Scrollbar } from "@/components/ui/scroll-area";

interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export default function ScrollAreaHorizontal() {
  return (
    <ScrollArea
      className={css({ w: "96", whiteSpace: "nowrap", rounded: "md", borderWidth: "1px" })}
    >
      <div className={css({ display: "flex", w: "max", spaceX: "4", p: "4" })}>
        {works.map((artwork) => (
          <figure key={artwork.artist} className={css({ flexShrink: "0" })}>
            <div className={css({ overflow: "hidden", rounded: "md" })}>
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className={css({ aspectRatio: "3/4", w: "fit", h: "fit", objectFit: "cover" })}
                width={300}
                height={400}
              />
            </div>
            <figcaption className={css({ pt: "2", textStyle: "xs", color: "muted.fg" })}>
              Photo by{" "}
              <span className={css({ fontWeight: "semibold", color: "fg" })}>{artwork.artist}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <Scrollbar orientation="horizontal" />
    </ScrollArea>
  );
}
