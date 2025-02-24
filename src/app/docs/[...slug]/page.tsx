import { LuExternalLink } from "react-icons/lu";
import { notFound } from "next/navigation";
import { styled } from "styled-system/jsx";
import { chip } from "styled-system/recipes";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getAllDocs, getDocBySlug } from "@/lib/mdx";
import TableOfContents from "./toc";

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({
    slug: doc.meta.slug.split("/"),
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const fullSlug = (await params).slug.join("/");
  const doc = await getDocBySlug(fullSlug);
  return {
    title: doc.meta.title,
    description: doc.meta.description,
  };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  let doc;
  const fullSlug = (await params).slug.join("/");

  try {
    doc = await getDocBySlug(fullSlug);
  } catch (_error) {
    notFound();
  }

  return (
    <styled.main css={{ display: "flex", flex: "1", minW: "0" }}>
      <styled.article
        css={{
          minW: "0",
          w: "full",
          maxW: "70ch",
          mx: "auto",
          px: "4",
          py: "10",
          md: { pl: "0" },
        }}
      >
        <styled.div css={{ mb: "8" }}>
          <Breadcrumb.Root css={{ mb: "4" }}>
            <Breadcrumb.List>
              <Breadcrumb.Item>Docs</Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Page>{doc.meta.title}</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>

          <styled.h1
            css={{
              color: "fg",
              textStyle: "3xl",
              fontWeight: "semibold",
              mb: "1",
            }}
          >
            {doc.meta.title}
          </styled.h1>

          <styled.p css={{ color: "muted.fg", mb: "4" }}>{doc.meta.description}</styled.p>

          {doc.meta.links?.length && (
            <styled.div css={{ display: "flex", flexWrap: "wrap", gap: "4" }}>
              {doc.meta.links.map((link: { title: string; href: string }) => (
                <styled.a
                  key={link.href}
                  href={link.href}
                  className={chip({ variant: "secondary" })}
                  css={{
                    _hover: {
                      textDecoration: "underline",
                    },
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                  <LuExternalLink />
                </styled.a>
              ))}
            </styled.div>
          )}
        </styled.div>

        {doc.content}
      </styled.article>
      <TableOfContents headings={doc.headings} />
    </styled.main>
  );
}
