import Link from "next/link";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { getAllDocs } from "@/lib/mdx";

export default async function ComponentsList() {
  const docs = await getAllDocs();

  const components = docs.filter((doc) => doc.meta.component);

  return (
    <styled.div
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "6",
      }}
    >
      {components.map((c) => (
        <Link
          key={c.meta.title}
          href={c.meta.slug}
          className={css({
            display: "flex",
            flexDir: "column",
            gap: "2",
            p: "4",
            rounded: "lg",
            transition: "background-color 200ms ease-in-out",
            _hover: {
              bg: "primary/5",
            },
          })}
        >
          <styled.figure
            css={{
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "200px",
              rounded: "md",
            }}
          >
            <styled.img
              src={c.meta.image || "/placeholder.svg"}
              alt={c.meta.title}
              css={{
                _dark: {
                  filter: "invert(1) brightness(1.5)",
                },
              }}
            />
          </styled.figure>
          <div>
            <styled.h2 css={{ fontWeight: "semibold" }}>{c.meta.title}</styled.h2>
            <styled.p css={{ color: "muted.fg", textStyle: "sm" }}>{c.meta.description}</styled.p>
          </div>
        </Link>
      ))}
    </styled.div>
  );
}
