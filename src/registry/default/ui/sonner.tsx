"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { cx } from "styled-system/css";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ className, ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className={cx("toaster group", className)}
      style={
        {
          "--normal-bg": "var(--colors-popover)",
          "--normal-text": "var(--colors-popover-fg)",
          "--normal-border": "var(--colors-border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
