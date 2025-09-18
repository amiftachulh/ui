import * as React from "react";
import { z } from "zod";
import { BlockViewer } from "@/components/block-viewer";
import ComponentPreview from "@/components/component-preview";
import { highlightCode } from "@/lib/highlight-code";
import { createFileTreeForRegistryItemFiles, getRegistryItem } from "@/lib/registry";
import { registryItemFileSchema } from "@/registry/schema";

export async function BlockDisplay({ name }: { name: string }) {
  const item = await getCachedRegistryItem(name);

  if (!item?.files) {
    return null;
  }

  const [tree, highlightedFiles] = await Promise.all([
    getCachedFileTree(item.files),
    getCachedHighlightedFiles(item.files),
  ]);

  return (
    <BlockViewer item={item} tree={tree} highlightedFiles={highlightedFiles}>
      <ComponentPreview name={item.name} />
    </BlockViewer>
  );
}

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});

const getCachedFileTree = React.cache(async (files: Array<{ path: string; target?: string }>) => {
  if (!files) {
    return null;
  }

  return createFileTreeForRegistryItemFiles(files);
});

const getCachedHighlightedFiles = React.cache(
  async (files: z.infer<typeof registryItemFileSchema>[]) => {
    return await Promise.all(
      files.map(async (file) => ({
        ...file,
        highlightedContent: await highlightCode(file.content ?? ""),
      }))
    );
  }
);
