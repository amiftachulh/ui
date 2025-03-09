"use client";

import * as React from "react";
import { LuPanelLeft } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css, cva, cx, type RecipeVariantProps } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useMediaQuery } from "@/hooks/use-media-query";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

function Provider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cx(
            "group-sidebar-wrapper",
            css({
              display: "flex",
              minH: "svh",
              w: "full",
              "&:has([data-variant=inset])": { bg: "sidebar" },
            }),
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}
const SidebarProvider = styled(Provider);
SidebarProvider.displayName = "SidebarProvider";

function Root({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cx(
          css({
            bg: "sidebar",
            color: "sidebar.fg",
            w: "var(--sidebar-width)",
            h: "full",
            flexDir: "column",
          }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Drawer open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <DrawerContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className={css({
            bg: "sidebar",
            color: "sidebar.fg",
            w: "var(--sidebar-width)",
            p: "0",
            "& > button": { display: "none" },
          })}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <DrawerHeader className={css({ srOnly: true })}>
            <DrawerTitle>Sidebar</DrawerTitle>
            <DrawerDescription>Displays the mobile sidebar.</DrawerDescription>
          </DrawerHeader>
          <div className={css({ display: "flex", flexDir: "column", w: "full", h: "full" })}>
            {children}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <div
      className={cx(
        "group peer",
        css({ color: "sidebar.fg", display: "none", md: { display: "block" } })
      )}
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cx(
          css({
            pos: "relative",
            w: "var(--sidebar-width)",
            bg: "transparent",
            transition: "width 200ms linear",
            ".group[data-collapsible=offcanvas] &": { w: "0" },
            ".group[data-side=right] &": { transform: "rotate(180deg)" },
            ".group[data-collapsible=icon] &": { w: "var(--sidebar-width-icon)" },
            ".group[data-variant=floating][data-collapsible=icon] &, .group[data-variant=inset][data-collapsible=icon] &":
              {
                w: "calc(var(--sidebar-width-icon) + var(--spacing-4))",
              },
          })
        )}
      />
      <div
        className={cx(
          css({
            pos: "fixed",
            insetY: "0",
            zIndex: "10",
            w: "var(--sidebar-width)",
            h: "svh",
            transitionProperty: "left, right, width",
            transitionDuration: "200ms",
            transitionTimingFunction: "linear",
            md: { display: "flex" },
            ".group[data-side=left] &": {
              left: "0",
              ".group[data-collapsible=offcanvas] &": { left: "calc(var(--sidebar-width) * -1)" },
            },
            ".group[data-side=right] &": {
              right: "0",
              ".group[data-collapsible=offcanvas] &": { right: "calc(var(--sidebar-width) * -1)" },
            },
            ".group[data-collapsible=icon] &": {
              w: "var(--sidebar-width-icon)",
              ".group[data-side=left] &": { borderRightWidth: "1px" },
              ".group[data-side=right] &": { borderLeftWidth: "1px" },
            },
            ".group[data-variant=floating] &, .group[data-variant=inset] &": {
              p: "2",
              ".group[data-collapsible=icon] &": {
                w: "calc(var(--sidebar-width-icon) + var(--spacing-4) + 2px)",
              },
            },
          }),
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className={css({
            bg: "sidebar",
            display: "flex",
            flexDir: "column",
            w: "full",
            h: "full",
            ".group[data-variant=floating] &": {
              borderWidth: "1px",
              borderColor: "sidebar.border",
              rounded: "lg",
              shadow: "sm",
            },
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
const Sidebar = styled(Root);
Sidebar.displayName = "Sidebar";

function Trigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cx(css({ w: "7", h: "7" }), className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <LuPanelLeft />
      <span className={css({ srOnly: true })}>Toggle Sidebar</span>
    </Button>
  );
}
const SidebarTrigger = styled(Trigger);
SidebarTrigger.displayName = "SidebarTrigger";

function Rail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cx(
        css({
          pos: "absolute",
          insetY: "0",
          zIndex: "20",
          display: "none",
          w: "4",
          transform: "translateX(-50%)",
          transition: "all",
          transitionTimingFunction: "linear",
          _after: {
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
        }),
        className
      )}
      {...props}
    />
  );
}
const SidebarRail = styled(Rail);
SidebarRail.displayName = "SidebarRail";

function Inset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cx(
        css({
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
              ".peer[data-state=collapsed] ~ &": { ml: "2" },
            },
          },
        }),
        className
      )}
      {...props}
    />
  );
}
const SidebarInset = styled(Inset);
SidebarInset.displayName = "SidebarInset";

function SidebarInputBase({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cx(css({ bg: "bg", w: "full", h: "8", shadow: "none" }), className)}
      {...props}
    />
  );
}
const SidebarInput = styled(SidebarInputBase);
SidebarInput.displayName = "SidebarInput";

function Header({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cx(css({ display: "flex", flexDir: "column", gap: "2", p: "2" }), className)}
      {...props}
    />
  );
}
const SidebarHeader = styled(Header);
SidebarHeader.displayName = "SidebarHeader";

function Footer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cx(css({ display: "flex", flexDir: "column", gap: "2", p: "2" }), className)}
      {...props}
    />
  );
}
const SidebarFooter = styled(Footer);
SidebarFooter.displayName = "SidebarFooter";

function SidebarSeparatorBase({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cx(css({ bg: "sidebar.border", mx: "2", w: "auto" }), className)}
      {...props}
    />
  );
}
const SidebarSeparator = styled(SidebarSeparatorBase);
SidebarSeparator.displayName = "SidebarSeparator";

function Content({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cx(
        css({
          display: "flex",
          flex: "1",
          flexDir: "column",
          gap: "2",
          minH: "0",
          overflow: "auto",
          ".group[data-collapse=icon] &": { overflow: "hidden" },
        }),
        className
      )}
      {...props}
    />
  );
}
const SidebarContent = styled(Content);
SidebarContent.displayName = "SidebarContent";

function Group({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cx(
        css({ pos: "relative", flex: "1", flexDir: "column", w: "full", minW: "0", p: "2" }),
        className
      )}
      {...props}
    />
  );
}
const SidebarGroup = styled(Group);
SidebarGroup.displayName = "SidebarGroup";

function GroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cx(
        css({
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
          transitionDuration: "fast",
          transitionTimingFunction: "linear",
          outline: "none",
          _focusVisible: {
            focusRing: "2",
            focusRingColor: "sidebar.ring",
            focusRingOffset: "2",
            focusRingOffsetColor: "sidebar",
          },
          "& > svg": {
            w: "4",
            h: "4",
            flexShrink: "0",
          },
          ".group[data-collapse=icon] &": {
            mt: "-8",
            opacity: "0",
          },
        }),
        className
      )}
      {...props}
    />
  );
}
const SidebarGroupLabel = styled(GroupLabel);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

function GroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cx(
        css({
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
          outline: "none",
          transition: "transform",
          _focusVisible: {
            focusRing: "2",
            focusRingColor: "sidebar.ring",
            focusRingOffset: "2",
            focusRingOffsetColor: "sidebar",
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
          ".group[data-collapse=icon] &": {
            display: "none",
          },
        }),
        className
      )}
      {...props}
    />
  );
}
const SidebarGroupAction = styled(GroupAction);
SidebarGroupAction.displayName = "SidebarGroupAction";

function GroupContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cx(css({ w: "full", textStyle: "sm" }), className)}
      {...props}
    />
  );
}
const SidebarGroupContent = styled(GroupContent);
SidebarGroupContent.displayName = "SidebarGroupContent";

function Menu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cx(
        css({ display: "flex", w: "full", minW: "0", flexDir: "column", gap: "1" }),
        className
      )}
      {...props}
    />
  );
}
const SidebarMenu = styled(Menu);
SidebarMenu.displayName = "SidebarMenu";

function MenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cx("group-menu-item", css({ pos: "relative" }), className)}
      {...props}
    />
  );
}
const SidebarMenuItem = styled(MenuItem);
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva({
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
    transitionProperty: "width, height, padding",
    transitionDuration: "fast",
    transitionTimingFunction: "ease",
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

function MenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "md",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & RecipeVariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cx(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
}
const SidebarMenuButton = styled(MenuButton);
SidebarMenuButton.displayName = "SidebarMenuButton";

function MenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  showOnHover?: boolean;
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cx(
        css({
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
          outline: "none",
          transition: "transform",
          _hover: {
            bg: "sidebar.accent",
            color: "sidebar.accent.fg",
          },
          _focusVisible: {
            focusRing: "2",
            focusRingColor: "sidebar.ring",
            focusRingOffset: "2",
            focusRingOffsetColor: "sidebar",
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
        }),
        showOnHover &&
          css({
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
          }),
        className
      )}
      {...props}
    />
  );
}
const SidebarMenuAction = styled(MenuAction);
SidebarMenuAction.displayName = "SidebarMenuAction";

function MenuBadge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cx(
        css({
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
        }),
        className
      )}
      {...props}
    />
  );
}
const SidebarMenuBadge = styled(MenuBadge);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

function MenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean;
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cx(
        css({ display: "flex", h: "8", alignItems: "center", gap: "2", rounded: "md", px: "2" }),
        className
      )}
      {...props}
    >
      {showIcon && (
        <Skeleton css={{ w: "4", h: "4", rounded: "md" }} data-sidebar="menu-skeleton-icon" />
      )}
      <Skeleton
        css={{ h: "4", maxW: "var(--skeleton-width)", flex: "1" }}
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
const SidebarMenuSkeleton = styled(MenuSkeleton);
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

function MenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cx(
        css({
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
          ".group[data-collapse=icon] &": {
            display: "none",
          },
        }),
        className
      )}
      {...props}
    />
  );
}
const SidebarMenuSub = styled(MenuSub);
SidebarMenuSub.displayName = "SidebarMenuSub";

function MenuSubItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cx("group-menu-sub-item", css({ pos: "relative" }), className)}
      {...props}
    />
  );
}
const SidebarMenuSubItem = styled(MenuSubItem);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

function MenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cx(
        css({
          display: "flex",
          alignItems: "center",
          gap: "2",
          minW: "0",
          h: "7",
          color: "sidebar.fg",
          transform: "translateX(-1px)",
          outline: "none",
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
            focusRing: "2",
            focusRingColor: "sidebar.ring",
            focusRingOffset: "2",
            focusRingOffsetColor: "sidebar",
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
        }),
        className
      )}
      {...props}
    />
  );
}
const SidebarMenuSubButton = styled(MenuSubButton);
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
