import { LuExternalLink } from "react-icons/lu";
import { notFound } from "next/navigation";
import { css, cx } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { chip } from "styled-system/recipes";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
    <main className={flex({ flex: "1", minW: "0" })}>
      <article
        className={css({
          minW: "0",
          w: "full",
          maxW: "70ch",
          mx: "auto",
          px: "4",
          py: "10",
          md: { pl: "0" },
        })}
      >
        <div className={css({ mb: "8" })}>
          <Breadcrumb mb="4">
            <BreadcrumbList>
              <BreadcrumbItem>Docs</BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{doc.meta.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1
            className={css({
              color: "fg",
              textStyle: "3xl",
              fontWeight: "semibold",
              mb: "1",
            })}
          >
            {doc.meta.title}
          </h1>
          <p className={css({ color: "fg.muted", mb: "4" })}>{doc.meta.description}</p>
          {doc.meta.links?.length > 0 && (
            <div className={flex({ wrap: "wrap", gap: "4" })}>
              {doc.meta.links.map((link: { title: string; url: string }) => (
                <a
                  key={link.url}
                  href={link.url}
                  className={cx(
                    chip({ variant: "subtle" }),
                    css({
                      _hover: {
                        textDecoration: "underline",
                      },
                    })
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                  <LuExternalLink />
                </a>
              ))}
            </div>
          )}
        </div>
        {doc.content}
      </article>
      <TableOfContents headings={doc.headings} />
    </main>
  );
}
