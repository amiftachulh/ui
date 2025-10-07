"use client";

import { cva, cx, type RecipeVariantProps } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { inputGroup } from "styled-system/recipes";
import { Button } from "@/registry/default/ui/button";
import { Textarea } from "@/registry/default/ui/textarea";
import { Input } from "./input";

const { withProvider, withContext } = createStyleContext(inputGroup);

const InputGroup = withProvider("div", "root", {
  defaultProps: {
    role: "group",
  },
});

function Addon({
  align = "inline-start",
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  align?: "inline-start" | "inline-end" | "block-start" | "block-end";
}) {
  return (
    <div
      role="group"
      data-align={align}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...props}
    />
  );
}

const InputGroupAddon = withContext(Addon, "addon");

const inputGroupButtonVariants = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
    textStyle: "sm",
    shadow: "none",
  },
  variants: {
    size: {
      xs: {
        h: "6",
        gap: "1",
        px: "2",
        "& > svg": {
          w: "3.5",
          h: "3.5",
        },
        "&:has(> svg)": {
          px: "2",
        },
      },
      sm: {
        h: "8",
        px: "2.5",
        gap: "1.5",
        rounded: "md",
        "&:has(> svg)": {
          px: "2.5",
        },
      },
      "icon-xs": {
        w: "6",
        h: "6",
        p: "0",
        "&:has(> svg)": {
          p: "0",
        },
      },
      "icon-sm": {
        w: "8",
        h: "8",
        p: "0",
        "&:has(> svg)": {
          p: "0",
        },
      },
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  RecipeVariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      variant={variant}
      className={cx(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

const InputGroupText = withContext("span", "text");

function InputGroupInput({ css, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="input-group-control"
      css={{
        flex: "1",
        rounded: "0",
        borderWidth: "0",
        bg: "transparent",
        shadow: "none",
        _focusVisible: {
          outlineWidth: "0",
        },
        _dark: {
          bg: "transparent",
        },
        ...css,
      }}
      {...props}
    />
  );
}

function InputGroupTextarea({ css, ...props }: React.ComponentProps<typeof Textarea>) {
  return (
    <Textarea
      data-slot="input-group-control"
      css={{
        flex: "1",
        resize: "none",
        rounded: "none",
        borderWidth: "0",
        bg: "transparent",
        py: "3",
        shadow: "none",
        _focusVisible: {
          outlineWidth: "0",
        },
        _dark: {
          bg: "transparent",
        },
        ...css,
      }}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
