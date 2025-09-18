import { styled } from "styled-system/jsx";
import { BlockDisplay } from "@/components/block-display";
import { getAllBlockIds } from "@/lib/blocks";
import { registryCategories } from "@/registry/registry-categories";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return registryCategories.map((category) => ({
    categories: [category.slug],
  }));
}

export default async function BlocksPage({
  params,
}: {
  params: Promise<{ categories?: string[] }>;
}) {
  const { categories = [] } = await params;
  const blocks = await getAllBlockIds(["registry:block"], categories);

  return (
    <styled.div css={{ display: "flex", flexDir: "column", gap: "12", md: { gap: "24" } }}>
      {blocks.map((name) => (
        <BlockDisplay key={name} name={name} />
      ))}
    </styled.div>
  );
}
