import Link from "next/link";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/registry/default/ui/button";

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
    </>
  );
}
