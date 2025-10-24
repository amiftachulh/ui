import Image from "next/image";
import Link from "next/link";
import { css } from "styled-system/css";
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
import { RootComponents } from "./components";

export default function Home() {
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
        <styled.section
          css={{
            borderColor: "border/50",
            overflow: "hidden",
            rounded: "lg",
            borderWidth: "1px",
            md: {
              display: "none",
              w: "150vw",
            },
          }}
        >
          <Image
            src="/r/dashboard-01-light.png"
            width={1400}
            height={875}
            alt="Dashboard"
            className={css({ display: "block", _dark: { display: "none" } })}
            priority
          />
          <Image
            src="/r/dashboard-01-dark.png"
            width={1400}
            height={875}
            alt="Dashboard"
            className={css({ display: "none", _dark: { display: "block" } })}
            priority
          />
        </styled.section>
        <styled.section css={{ display: "none", md: { display: "block" } }}>
          <RootComponents />
        </styled.section>
      </styled.div>
    </>
  );
}
