"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { toggle, toggleGroup, ToggleVariantProps } from "styled-system/recipes";

const ToggleGroupContext = React.createContext<ToggleVariantProps>({
  variant: "plain",
  size: "md",
});

function Root({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & ToggleVariantProps) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      className={cx(toggleGroup(), className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}
const ToggleGroup = styled(Root);
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

function Item({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & ToggleVariantProps) {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      className={cx(
        toggle({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}
const ToggleGroupItem = styled(Item);
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
