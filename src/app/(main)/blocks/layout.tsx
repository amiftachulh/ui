import { styled } from "styled-system/jsx";
import { BlocksNav } from "@/components/blocks-nav";
import PageHeader from "@/components/page-header";

const title = "Building Blocks for the Web";
const description =
  "Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.";

export default function BlocksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader title={title} description={description} />
      <BlocksNav />
      <styled.div css={{ md: { py: "12" } }}>{children}</styled.div>
    </>
  );
}
