import { LuExternalLink } from "react-icons/lu";
import { notFound } from "next/navigation";
import { styled } from "styled-system/jsx";
import { badge } from "styled-system/recipes";
import { DocsPager } from "@/components/pager";
import { getAllDocs, getDocBySlug } from "@/lib/mdx";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
import TableOfContents from "./toc";

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({
    slug: doc.meta.slug.replace("/docs/", "").split("/"),
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const fullSlug = (await params).slug.join("/");
  const doc = await getDocBySlug(fullSlug);
  return {
    title: doc.meta.title,
    description: doc.meta.description,
    openGraph: {
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.meta.title
          )}&description=${encodeURIComponent(doc.meta.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.meta.title
          )}&description=${encodeURIComponent(doc.meta.description)}`,
        },
      ],
    },
  };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  let doc;
  const fullSlug = slug.join("/");

  try {
    doc = await getDocBySlug(fullSlug);
  } catch (error) {
    console.log(error);
    notFound();
  }

  return (
    <styled.main css={{ display: "flex", flex: "1", minW: "0" }}>
      <styled.div
        data-toc={doc.headings.length > 0}
        css={{
          minW: "0",
          w: "full",
          mx: "auto",
          px: "4",
          py: "10",
          md: { pl: "0" },
          "&[data-toc='true']": {
            maxW: "70ch",
          },
        }}
      >
        <styled.article
          css={{
            mb: "10",
          }}
        >
          <styled.div css={{ mb: "8" }}>
            <Breadcrumb css={{ mb: "4" }}>
              <BreadcrumbList>
                <BreadcrumbItem>Docs</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{doc.meta.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

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

            {doc.meta.links?.length > 0 && (
              <styled.div css={{ display: "flex", flexWrap: "wrap", gap: "4" }}>
                {doc.meta.links.map((link: { title: string; href: string }) => (
                  <styled.a
                    key={link.href}
                    href={link.href}
                    className={badge({ variant: "secondary" })}
                    css={{
                      rounded: "sm",
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
        <DocsPager doc={doc} />
      </styled.div>
      <TableOfContents headings={doc.headings} />
    </styled.main>
  );
}
