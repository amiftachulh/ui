"use client";

import * as React from "react";
import { LuPanelLeft } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { sidebar } from "styled-system/recipes";
import { useMediaQuery } from "@/registry/default/hooks/use-media-query";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Separator } from "@/registry/default/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/registry/default/ui/sheet";
import { Skeleton } from "@/registry/default/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

const classes = sidebar();

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
          className={cx("group-sidebar-wrapper", classes.wrapper, className)}
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
      <div data-slot="sidebar" className={cx(classes.nonCollapsibleRoot, className)} {...props}>
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} side={side} {...props}>
        <SheetContent
          data-slot="sidebar"
          data-sidebar="sidebar"
          data-mobile="true"
          css={{
            bg: "sidebar",
            color: "sidebar.fg",
            w: "var(--sidebar-width)",
            p: "0",
            "& > button": { display: "none" },
          }}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
        >
          <SheetHeader css={{ srOnly: true }}>
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className={css({ display: "flex", flexDir: "column", w: "full", h: "full" })}>
            {children}
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className={cx(
        "group peer",
        css({ color: "sidebar.fg", display: "none", md: { display: "block" } })
      )}
      data-slot="sidebar"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cx(
          css({
            pos: "relative",
            w: "var(--sidebar-width)",
            bg: "transparent",
            transition: "all",
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
      <div data-slot="sidebar-container" className={cx(classes.root, className)} {...props}>
        <div
          data-slot="sidebar-inner"
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
      data-slot="sidebar-trigger"
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cx(classes.trigger, className)}
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
      data-slot="sidebar-rail"
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cx(classes.rail, className)}
      {...props}
    />
  );
}
const SidebarRail = styled(Rail);
SidebarRail.displayName = "SidebarRail";

function Inset({ className, ...props }: React.ComponentProps<"main">) {
  return <main data-slot="sidebar-inset" className={cx(classes.inset, className)} {...props} />;
}
const SidebarInset = styled(Inset);
SidebarInset.displayName = "SidebarInset";

function SidebarInputBase({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cx(classes.input, className)}
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
      className={cx(classes.header, className)}
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
      className={cx(classes.footer, className)}
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
      className={cx(classes.separator, className)}
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
      className={cx(classes.content, className)}
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
      className={cx(classes.group, className)}
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
      className={cx(classes.groupLabel, className)}
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
      className={cx(classes.groupAction, className)}
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
      className={cx(classes.groupContent, className)}
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
      className={cx(classes.menu, className)}
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
      className={cx("group-menu-item", classes.menuItem, className)}
      {...props}
    />
  );
}
const SidebarMenuItem = styled(MenuItem);
SidebarMenuItem.displayName = "SidebarMenuItem";

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
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
}) {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-active={isActive}
      data-variant={variant}
      data-size={size}
      className={cx("peer-menu-button", classes.menuButton, className)}
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
      data-show-on-hover={showOnHover}
      className={cx(classes.menuAction, className)}
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
      className={cx(classes.menuBadge, className)}
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
      className={cx(classes.menuSkeleton, className)}
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
      className={cx(classes.menuSub, className)}
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
      className={cx("group-menu-sub-item", classes.menuSubItem, className)}
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
      className={cx(classes.menuSubButton, className)}
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
