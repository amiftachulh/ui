import type { Metadata } from "next";
import { styled } from "styled-system/jsx";
import { BlocksNav } from "@/components/blocks-nav";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";

const title = "Building Blocks for the Web";
const description =
  "Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.";

export const metadata: Metadata = {
  title,
  description,
};

export default function BlocksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeader>
      <BlocksNav />
      <styled.div css={{ pb: "8", md: { py: "12" } }}>{children}</styled.div>
    </>
  );
}
