import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { item } from "styled-system/recipes";
import { Separator } from "@/registry/default/ui/separator";

const classes = item();

function ItemGroup({ className, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div
      role="list"
      data-slot="item-group"
      className={cx(classes.group, className)}
      {...props}
    />
  );
}

function ItemSeparator({ css, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      css={{ my: "0", ...css }}
      {...props}
    />
  );
}

function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<typeof styled.div> & {
  variant?: "default" | "outline" | "muted";
  size?: "default" | "sm";
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : styled.div;
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cx(classes.root, className)}
      {...props}
    />
  );
}

function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof styled.div> & { variant?: "default" | "icon" | "image" }) {
  return (
    <styled.div
      data-slot="item-media"
      data-variant={variant}
      className={cx(classes.media, className)}
      {...props}
    />
  );
}

function ItemContent({ className, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div data-slot="item-content" className={cx(classes.content, className)} {...props} />
  );
}

function ItemTitle({ className, ...props }: React.ComponentProps<typeof styled.div>) {
  return <styled.div data-slot="item-title" className={cx(classes.title, className)} {...props} />;
}

function ItemDescription({ className, ...props }: React.ComponentProps<typeof styled.p>) {
  return (
    <styled.p
      data-slot="item-description"
      className={cx(classes.description, className)}
      {...props}
    />
  );
}

function ItemActions({ className, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div data-slot="item-actions" className={cx(classes.actions, className)} {...props} />
  );
}

function ItemHeader({ className, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div data-slot="item-header" className={cx(classes.header, className)} {...props} />
  );
}

function ItemFooter({ className, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div data-slot="item-footer" className={cx(classes.footer, className)} {...props} />
  );
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
};
