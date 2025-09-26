import type { Metadata } from "next";
import { ChartsNav } from "@/components/charts-nav";
import PageHeader from "@/components/page-header";
import { PageNav } from "@/components/page-nav";

const title = "Beautiful Charts & Graphs";
const description =
  "A collection of ready-to-use chart components built with Recharts. From basic charts to rich data displays, copy and paste into your apps.";

export const metadata: Metadata = {
  title,
  description,
};

export default function ChartsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader title={title} description={description} />
      <PageNav id="charts">
        <ChartsNav />
      </PageNav>
      {children}
    </>
  );
}
