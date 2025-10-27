import type { Metadata } from "next";
import Link from "next/link";
import { styled } from "styled-system/jsx";
import { ExamplesNav } from "@/components/examples-nav";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PageNav } from "@/components/page-nav";
import { Button } from "@/registry/default/ui/button";

export const dynamic = "force-static";
export const revalidate = false;

const title = "Examples";
const description = "Check out some examples app built using the components.";

export const metadata: Metadata = {
  title,
  description,
};

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          A collection of component styled with Panda CSS based on shadcn.
        </PageHeaderDescription>
        <PageActions>
          <Button size="sm" asChild>
            <Link href="/docs/overview/getting-started">Getting Started</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/docs/components/accordion">Browse Components</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <PageNav css={{ display: "none", md: { display: "flex" } }}>
        <ExamplesNav
          css={{
            flex: "1",
            overflow: "hidden",
            "& > a:first-child": {
              color: "primary",
            },
          }}
        />
      </PageNav>
      <styled.div css={{ flex: "1", pb: "6" }}>
        <styled.div
          css={{
            bg: "bg",
            display: "flex",
            flexDir: "column",
            overflow: "hidden",
            rounded: "lg",
            borderWidth: "1px",
            md: { flex: "1" },
            xl: { rounded: "xl" },
          }}
        >
          <styled.section css={{ display: "none", md: { display: "block" } }}>
            {children}
          </styled.section>
        </styled.div>
      </styled.div>
    </>
  );
}
