"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { css, cx } from "styled-system/css";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: cx(
            "group toast",
            css({
              ".group.toaster &": { bg: "bg", color: "fg", borderColor: "border", boxShadow: "lg" },
            })
          ),
          description: css({ ".group.toast &": { color: "muted" } }),
          actionButton: css({ ".group.toast &": { bg: "primary", color: "primary.fg" } }),
          cancelButton: css({ ".group.toast &": { bg: "muted", color: "muted.fg" } }),
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
