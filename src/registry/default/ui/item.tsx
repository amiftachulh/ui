import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { styled } from "styled-system/jsx";
import { item } from "styled-system/recipes";
import { Separator } from "@/registry/default/ui/separator";

const classes = item();

function ItemGroup(props: React.ComponentProps<typeof styled.div>) {
  return <styled.div role="list" data-slot="item-group" className={classes.group} {...props} />;
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
      className={classes.root}
      {...props}
    />
  );
}

function ItemMedia({
  variant = "default",
  ...props
}: React.ComponentProps<typeof styled.div> & { variant?: "default" | "icon" | "image" }) {
  return (
    <styled.div
      data-slot="item-media"
      data-variant={variant}
      className={classes.media}
      {...props}
    />
  );
}

function ItemContent(props: React.ComponentProps<typeof styled.div>) {
  return <styled.div data-slot="item-content" className={classes.content} {...props} />;
}

function ItemTitle(props: React.ComponentProps<typeof styled.div>) {
  return <styled.div data-slot="item-title" className={classes.title} {...props} />;
}

function ItemDescription(props: React.ComponentProps<typeof styled.p>) {
  return <styled.p data-slot="item-description" className={classes.description} {...props} />;
}

function ItemActions(props: React.ComponentProps<typeof styled.div>) {
  return <styled.div data-slot="item-actions" className={classes.actions} {...props} />;
}

function ItemHeader(props: React.ComponentProps<typeof styled.div>) {
  return <styled.div data-slot="item-header" className={classes.header} {...props} />;
}

function ItemFooter(props: React.ComponentProps<typeof styled.div>) {
  return <styled.div data-slot="item-footer" className={classes.footer} {...props} />;
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
