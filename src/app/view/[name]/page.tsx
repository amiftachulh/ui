import * as React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { getRegistryComponent, getRegistryItem } from "@/lib/registry";
import { registryItemSchema } from "@/registry/schema";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    name: string;
  }>;
}): Promise<Metadata> {
  const { name } = await params;
  const item = await getCachedRegistryItem(name);

  if (!item) {
    return {};
  }

  return {
    title: item.name,
    description: item.description,
  };
}

export async function generateStaticParams() {
  const { Index } = await import("@/registry/__index__");
  const index = z.record(registryItemSchema).parse(Index);

  return Object.values(index)
    .filter((block) =>
      ["registry:block", "registry:component", "registry:example", "registry:internal"].includes(
        block.type
      )
    )
    .map((block) => ({
      name: block.name,
    }));
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    name: string;
  }>;
}) {
  const { name } = await params;
  const item = await getCachedRegistryItem(name);
  const Component = getRegistryComponent(name);

  if (!item || !Component) {
    return notFound();
  }

  return (
    <styled.div css={{ bg: "bg" }} className={item.meta?.container}>
      <Component />
    </styled.div>
  );
}
