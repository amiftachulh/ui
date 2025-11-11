"use client";

import { LuCircleCheck, LuInfo, LuLoaderCircle, LuOctagonX, LuTriangleAlert } from "react-icons/lu";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { css, cx } from "styled-system/css";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ className, style, ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className={cx("toaster group", className)}
      icons={{
        success: <LuCircleCheck className={css({ w: "4", h: "4" })} />,
        info: <LuInfo className={css({ w: "4", h: "4" })} />,
        warning: <LuTriangleAlert className={css({ w: "4", h: "4" })} />,
        error: <LuOctagonX className={css({ w: "4", h: "4" })} />,
        loading: <LuLoaderCircle className={css({ w: "4", h: "4", animation: "spin" })} />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-fg)",
          "--normal-border": "var(--border)",
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
