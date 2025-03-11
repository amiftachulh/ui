import { defineRecipe } from "@pandacss/dev";

export const sidebarMenuButtonRecipe = defineRecipe({
  className: "sidebar-menu-button",
  base: {
    display: "flex",
    w: "full",
    alignItems: "center",
    gap: "2",
    overflow: "hidden",
    rounded: "md",
    p: "2",
    textStyle: "sm",
    textAlign: "left",
    outline: "none",
    transition: "all",
    _hover: {
      bg: "sidebar.accent",
      color: "sidebar.accent.fg",
    },
    _focusVisible: {
      focusRing: "2",
      focusRingColor: "ring",
      focusRingOffset: "2",
      focusRingOffsetColor: "bg",
    },
    _disabled: {
      pointerEvents: "none",
      opacity: "0.5",
    },
    ".group-menu-item:has([data-sidebar=menu-action]) &": {
      pr: "8",
    },
    "&[data-active=true]": {
      bg: "sidebar.accent",
      color: "sidebar.accent.fg",
      fontWeight: "medium",
    },
    _open: {
      _hover: {
        bg: "sidebar.accent",
        color: "sidebar.accent.fg",
      },
    },
    ".group[data-collapsible=icon] &": {
      w: "8!",
      h: "8!",
      p: "2!",
    },
    "& > span:last-child": {
      truncate: true,
    },
    "& > svg": {
      w: "4",
      h: "4",
      flexShrink: "0",
    },
  },

  variants: {
    variant: {
      default: {
        _hover: {
          bg: "sidebar.accent",
          color: "sidebar.accent.fg",
        },
      },
      outline: {
        bg: "background",
        shadow: "0 0 0 1px hsl(var(--colors-sidebar-border))",
        _hover: {
          bg: "sidebar.accent",
          color: "sidebar.accent.fg",
          shadow: "0 0 0 1px hsl(var(--colors-sidebar-accent))",
        },
      },
    },
    size: {
      sm: {
        h: "7",
        textStyle: "xs",
      },
      md: {
        h: "8",
        textStyle: "sm",
      },
      lg: {
        h: "12",
        textStyle: "sm",
        ".group[data-collapsible=icon] &": {
          p: "0!",
        },
      },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
