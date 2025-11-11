"use client";

import { Slot } from "@radix-ui/react-slot";
import { createStyleContext } from "styled-system/jsx";
import { buttonGroup } from "styled-system/recipes";
import { Separator } from "@/registry/default/ui/separator";

const { withProvider, withContext } = createStyleContext(buttonGroup);

function Root({
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & { orientation?: "horizontal" | "vertical" }) {
  return <div data-slot="button-group" role="group" data-orientation={orientation} {...props} />;
}
const ButtonGroup = withProvider(Root, "root");

function Text({ asChild = false, ...props }: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";

  return <Comp data-slot="button-group-text" {...props} />;
}
const ButtonGroupText = withContext(Text, "text");

function SeparatorBase({
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return <Separator data-slot="button-group-separator" orientation={orientation} {...props} />;
}
const ButtonGroupSeparator = withContext(SeparatorBase, "separator");

export { ButtonGroup, ButtonGroupText, ButtonGroupSeparator };
