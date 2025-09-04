import { defineSlotRecipe } from "@pandacss/dev";

export const sidebarSlotRecipe = defineSlotRecipe({
  className: "sidebar",
  slots: [
    "wrapper",
    "nonCollapsibleRoot",
    "root",
    "trigger",
    "rail",
    "inset",
    "input",
    "header",
    "footer",
    "separator",
    "content",
    "group",
    "groupLabel",
    "groupAction",
    "groupContent",
    "menu",
    "menuItem",
    "menuAction",
    "menuBadge",
    "menuSkeleton",
    "menuSub",
    "menuSubItem",
    "menuSubButton",
  ],
  base: {
    wrapper: {
      display: "flex",
      minH: "svh",
      w: "full",
      "&:has([data-variant=inset])": { bg: "sidebar" },
    },

    nonCollapsibleRoot: {
      bg: "sidebar",
      color: "sidebar.fg",
      w: "var(--sidebar-width)",
      h: "full",
      flexDir: "column",
    },

    root: {
      pos: "fixed",
      insetY: "0",
      zIndex: "10",
      display: "none",
      w: "var(--sidebar-width)",
      h: "svh",
      transitionProperty: "left, right, width",
      transitionDuration: "normal",
      transitionTimingFunction: "default",
      md: { display: "flex" },
      ".group[data-side=left] &": {
        left: "0",
        borderRightWidth: "1px",
      },
      ".group[data-side=left][data-collapsible=offcanvas] &": {
        left: "calc(var(--sidebar-width) * -1)",
      },
      ".group[data-side=right] &": {
        right: "0",
        borderLeftWidth: "1px",
      },
      ".group[data-side=right][data-collapsible=offcanvas] &": {
        right: "calc(var(--sidebar-width) * -1)",
      },
      ".group[data-collapsible=icon] &": {
        w: "var(--sidebar-width-icon)",
      },
      ".group[data-variant=floating] &, .group[data-variant=inset] &": {
        p: "2",
      },
      ".group[data-variant=floating][data-collapsible=icon] &, .group[data-variant=inset][data-collapsible=icon] &":
        {
          w: "calc(var(--sidebar-width-icon) + var(--spacing-4) + 2px)",
        },
    },

    trigger: {
      w: "7",
      h: "7",
    },

    rail: {
      pos: "absolute",
      insetY: "0",
      zIndex: "20",
      display: "none",
      w: "4",
      transform: "translateX(-50%)",
      transition: "all",
      transitionTimingFunction: "linear",
      _after: {
        content: '""',
        pos: "absolute",
        insetY: "0",
        left: "50%",
        w: "2px",
      },
      _hover: {
        _after: {
          bg: "sidebar.border",
        },
      },
      sm: { display: "flex" },
      ".group[data-side=left] &": { right: "-4" },
      ".group[data-side=right] &": { left: "0" },
      "[data-side=left] &": { cursor: "w-resize" },
      "[data-side=right] &": { cursor: "e-resize" },
      "[data-side=left][data-state=collapsed] &": { cursor: "e-resize" },
      "[data-side=right][data-state=collapsed] &": { cursor: "w-resize" },
      ".group[data-collapsible=offcanvas] &": {
        transform: "translateX(0)",
        _after: { left: "100%" },
        _hover: { bg: "sidebar" },
      },
      "[data-side=left][data-collapsible=offcanvas] &": { right: "-2" },
      "[data-side=right][data-collapsible=offcanvas] &": { left: "-2" },
    },

    inset: {
      bg: "bg",
      pos: "relative",
      display: "flex",
      flex: "1",
      flexDir: "column",
      w: "full",
      md: {
        ".peer[data-variant=inset] ~ &": {
          m: "2",
          ml: "0",
          rounded: "xl",
          shadow: "sm",
        },
        ".peer[data-variant=inset][data-state=collapsed] ~ &": { ml: "2" },
      },
    },

    input: {
      bg: "bg",
      w: "full",
      h: "8",
      shadow: "none",
    },

    header: {
      display: "flex",
      flexDir: "column",
      gap: "2",
      p: "2",
    },

    footer: {
      display: "flex",
      flexDir: "column",
      gap: "2",
      p: "2",
    },

    separator: {
      bg: "sidebar.border",
      mx: "2",
      w: "auto",
    },

    content: {
      display: "flex",
      flex: "1",
      flexDir: "column",
      gap: "2",
      minH: "0",
      overflow: "auto",
      ".group[data-collapsible=icon] &": { overflow: "hidden" },
    },

    group: {
      pos: "relative",
      display: "flex",
      flexDir: "column",
      w: "full",
      minW: "0",
      p: "2",
    },

    groupLabel: {
      color: "sidebar.fg/70",
      display: "flex",
      alignItems: "center",
      flexShrink: "0",
      h: "8",
      px: "2",
      rounded: "md",
      textStyle: "xs",
      fontWeight: "medium",
      transitionProperty: "margin, opacity",
      transitionDuration: "normal",
      transitionTimingFunction: "linear",
      outlineColor: "transparent",
      _focusVisible: {
        outlineWidth: "2px",
        outlineStyle: "solid",
        outlineColor: "sidebar.ring/50",
      },
      "& > svg": {
        w: "4",
        h: "4",
        flexShrink: "0",
      },
      ".group[data-collapsible=icon] &": {
        mt: "-8",
        opacity: "0",
      },
    },

    groupAction: {
      color: "sidebar.fg",
      pos: "absolute",
      top: "3.5",
      right: "3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      aspectRatio: "square",
      w: "5",
      p: "0",
      rounded: "md",
      outlineColor: "transparent",
      transition: "transform",
      _focusVisible: {
        outlineWidth: "2px",
        outlineStyle: "solid",
        outlineColor: "sidebar.ring/50",
      },
      "& > svg": {
        w: "4",
        h: "4",
        flexShrink: "0",
      },
      _after: {
        pos: "absolute",
        inset: "-2",
        md: { display: "none" },
      },
      ".group[data-collapsible=icon] &": {
        display: "none",
      },
    },

    groupContent: {
      w: "full",
      textStyle: "sm",
    },

    menu: {
      display: "flex",
      w: "full",
      minW: "0",
      flexDir: "column",
      gap: "1",
    },

    menuItem: {
      pos: "relative",
    },

    menuAction: {
      pos: "absolute",
      top: "1.5",
      right: "1",
      display: "flex",
      aspectRatio: "square",
      w: "5",
      alignItems: "center",
      justifyContent: "center",
      rounded: "md",
      p: "0",
      color: "sidebar.fg",
      outlineColor: "transparent",
      transition: "transform",
      _hover: {
        bg: "sidebar.accent",
        color: "sidebar.accent.fg",
      },
      _focusVisible: {
        outlineWidth: "2px",
        outlineStyle: "solid",
        outlineColor: "sidebar.ring/50",
      },
      ".peer-menu-button:hover ~ &": {
        color: "sidebar.accent.fg",
      },
      _after: {
        pos: "absolute",
        inset: "-2",
        md: { display: "none" },
      },
      ".peer-menu-button[data-size=sm] ~ &": {
        top: "1",
      },
      ".peer-menu-button[data-size=md] ~ &": {
        top: "1.5",
      },
      ".peer-menu-button[data-size=lg] ~ &": {
        top: "2.5",
      },
      ".group[data-collapsible=icon] &": {
        display: "none",
      },
      "&[data-show-on-hover=true]": {
        ".peer-menu-button[data-active=true] ~ &": {
          color: "sidebar.accent.fg",
        },
        ".group-menu-item:focus-within &": {
          opacity: "1",
        },
        ".group-menu-item:hover &": {
          opacity: "1",
        },
        _open: { opacity: "1" },
        md: { opacity: "0" },
      },
    },

    menuBadge: {
      color: "sidebar.fg",
      pointerEvents: "none",
      pos: "absolute",
      right: "1",
      display: "flex",
      minW: "5",
      h: "5",
      alignItems: "center",
      justifyContent: "center",
      rounded: "md",
      px: "1",
      textStyle: "xs",
      fontWeight: "medium",
      fontVariantNumeric: "tabular-nums",
      userSelect: "none",
      ".peer-menu-button:hover ~ &": {
        color: "sidebar.accent.fg",
      },
      ".peer-menu-button[data-active=true] ~ &": {
        color: "sidebar.accent.fg",
      },
      ".peer-menu-button[data-size=sm] ~ &": {
        top: "1",
      },
      ".peer-menu-button[data-size=md] ~ &": {
        top: "1.5",
      },
      ".peer-menu-button[data-size=lg] ~ &": {
        top: "2.5",
      },
      ".group[data-collapsible=icon] &": {
        display: "none",
      },
    },

    menuSkeleton: {
      display: "flex",
      h: "8",
      alignItems: "center",
      gap: "2",
      rounded: "md",
      px: "2",
    },

    menuSub: {
      borderColor: "sidebar.border",
      mx: "3.5",
      display: "flex",
      minW: "0",
      transform: "translateX(-1px)",
      flexDir: "column",
      gap: "1",
      borderLeftWidth: "1px",
      px: "2.5",
      py: "0.5",
      ".group[data-collapsible=icon] &": {
        display: "none",
      },
    },

    menuSubItem: {
      pos: "relative",
    },

    menuSubButton: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      minW: "0",
      h: "7",
      px: "2",
      color: "sidebar.fg",
      transform: "translateX(-1px)",
      outlineColor: "transparent",
      overflow: "hidden",
      rounded: "md",
      _hover: {
        bg: "sidebar.accent",
        color: "sidebar.accent.fg",
      },
      "&[data-active=true]": {
        bg: "sidebar.accent",
        color: "sidebar.accent.fg",
      },
      _focusVisible: {
        outlineWidth: "2px",
        outlineStyle: "solid",
        outlineColor: "sidebar.ring/50",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
      },
      "&[data-size=sm]": { textStyle: "xs" },
      "&[data-size=md]": { textStyle: "sm" },
      ".group[data-collapsible=icon] &": {
        display: "none",
      },
      "& > svg": {
        w: "4",
        h: "4",
        flexShrink: "0",
        color: "sidebar.accent.fg",
        _last: {
          truncate: true,
        },
      },
    },
  },
});
