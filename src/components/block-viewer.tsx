"use client";

import { createContext, useContext, useMemo, useRef, useState } from "react";
import {
  LuCheck,
  LuChevronRight,
  LuClipboard,
  LuFile,
  LuFolder,
  LuFullscreen,
  LuMonitor,
  LuRotateCw,
  LuSmartphone,
  LuTablet,
} from "react-icons/lu";
import { ImperativePanelHandle } from "react-resizable-panels";
import Link from "next/link";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { createFileTreeForRegistryItemFiles, FileTree } from "@/lib/registry";
import { Button } from "@/registry/default/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/default/ui/resizable";
import { Separator } from "@/registry/default/ui/separator";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/registry/default/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/registry/default/ui/toggle-group";
import { registryItemFileSchema, registryItemSchema } from "@/registry/schema";

type BlockViewerContextValue = {
  item: z.infer<typeof registryItemSchema>;
  view: "code" | "preview";
  setView: (view: "code" | "preview") => void;
  activeFile: string | null;
  setActiveFile: (file: string) => void;
  resizablePanelRef: React.RefObject<ImperativePanelHandle | null> | null;
  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null;
  highlightedFiles:
    | (z.infer<typeof registryItemFileSchema> & {
        highlightedContent: string;
      })[]
    | null;
  iframeKey?: number;
  setIframeKey?: React.Dispatch<React.SetStateAction<number>>;
};

const BlockViewerContext = createContext<BlockViewerContextValue | null>(null);

function BlockViewerProvider({
  item,
  tree,
  highlightedFiles,
  children,
}: Pick<BlockViewerContextValue, "item" | "tree" | "highlightedFiles"> & {
  children: React.ReactNode;
}) {
  const [view, setView] = useState<BlockViewerContextValue["view"]>("preview");
  const [activeFile, setActiveFile] = useState<BlockViewerContextValue["activeFile"]>(
    highlightedFiles?.[0].target ?? null
  );
  const resizablePanelRef = useRef<ImperativePanelHandle>(null);
  const [iframeKey, setIframeKey] = useState(0);

  return (
    <BlockViewerContext
      value={{
        item,
        view,
        setView,
        resizablePanelRef,
        activeFile,
        setActiveFile,
        tree,
        highlightedFiles,
        iframeKey,
        setIframeKey,
      }}
    >
      <styled.div
        id={item.name}
        data-view={view}
        className="block-view-wrapper"
        css={{
          display: "flex",
          minW: "0",
          scrollMarginTop: "24",
          flexDir: "column-reverse",
          alignItems: "stretch",
          gap: "4",
          overflow: "hidden",
          md: { flexDir: "column" },
        }}
        style={
          {
            "--height": item.meta?.iframeHeight ?? "930px",
          } as React.CSSProperties
        }
      >
        {children}
      </styled.div>
    </BlockViewerContext>
  );
}

function useBlockViewer() {
  const context = useContext(BlockViewerContext);
  if (!context) {
    throw new Error("useBlockViewer must be used within a BlockViewerProvider.");
  }
  return context;
}

function BlockViewerToolbar() {
  const { setView, view, item, resizablePanelRef, setIframeKey } = useBlockViewer();

  return (
    <styled.div
      css={{
        display: "none",
        w: "full",
        alignItems: "center",
        gap: "2",
        pl: "2",
        md: { pr: "6" },
        lg: { display: "flex" },
      }}
    >
      <Tabs value={view} onValueChange={(value) => setView(value as "preview" | "code")}>
        <TabsList
          css={{
            borderBottomWidth: "0",
            "& > .tabs__trigger": {
              borderBottomWidth: "0",
              "&[data-state=active]": {
                bg: "primary",
                color: "primary.fg",
                rounded: "md",
              },
            },
          }}
        >
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      </Tabs>
      <Separator orientation="vertical" css={{ mx: "2", h: "4!" }} />
      <styled.a
        href={`#${item.name}`}
        css={{
          flex: "1",
          textAlign: "center",
          textStyle: "sm",
          fontWeight: "medium",
          textUnderlineOffset: "4px",
          _hover: { textDecoration: "underline" },
          md: { flex: "auto", textAlign: "left" },
        }}
      >
        {item.description?.replace(/\.$/, "")}
      </styled.a>
      <styled.div css={{ ml: "auto", display: "flex", alignItems: "center", gap: "2" }}>
        <styled.div
          css={{
            h: "8",
            alignItems: "center",
            gap: "1.5",
            rounded: "md",
            borderWidth: "1px",
            p: "1",
            shadow: "none",
          }}
        >
          <ToggleGroup
            type="single"
            defaultValue="100"
            onValueChange={(value) => {
              setView("preview");
              if (resizablePanelRef?.current) {
                resizablePanelRef.current.resize(parseInt(value));
              }
            }}
            css={{
              gap: "1",
              "& .toggle-group__item": {
                w: "6!",
                h: "6!",
                rounded: "sm!",
              },
            }}
          >
            <ToggleGroupItem value="100" title="Desktop">
              <LuMonitor />
            </ToggleGroupItem>
            <ToggleGroupItem value="60" title="Tablet">
              <LuTablet />
            </ToggleGroupItem>
            <ToggleGroupItem value="30" title="Mobile">
              <LuSmartphone />
            </ToggleGroupItem>
            <Separator orientation="vertical" css={{ h: "4!" }} />
            <Button
              size="icon"
              variant="ghost"
              css={{ w: "6", h: "6", rounded: "sm", p: 0 }}
              asChild
              title="Open in New Tab"
            >
              <Link href={`/view/${item.name}`} target="_blank">
                <styled.span css={{ srOnly: true }}>Open in New Tab</styled.span>
                <LuFullscreen />
              </Link>
            </Button>
            <Separator orientation="vertical" css={{ h: "4!" }} />
            <Button
              size="icon"
              variant="ghost"
              css={{ w: "6", h: "6", rounded: "sm", p: 0 }}
              title="Refresh Preview"
              onClick={() => {
                if (setIframeKey) {
                  setIframeKey((k) => k + 1);
                }
              }}
            >
              <LuRotateCw />
              <styled.span css={{ srOnly: true }}>Refresh Preview</styled.span>
            </Button>
          </ToggleGroup>
        </styled.div>
      </styled.div>
    </styled.div>
  );
}

function BlockViewerIframe({ css, ...props }: React.ComponentProps<typeof styled.iframe>) {
  const { item, iframeKey } = useBlockViewer();

  return (
    <styled.iframe
      key={iframeKey}
      src={`/view/${item.name}`}
      height={item.meta?.iframeHeight ?? 930}
      loading="lazy"
      css={{
        bg: "bg",
        pos: "relative",
        zIndex: "20",
        w: "full",
        _scrollbar: { display: "none" },
        ...css,
      }}
      {...props}
    />
  );
}

function BlockViewerView() {
  const { resizablePanelRef } = useBlockViewer();

  return (
    <styled.div
      css={{
        display: "none",
        ".block-view-wrapper[data-view=code] &": {
          display: "none",
        },
        md: { h: "var(--height)" },
        lg: { display: "flex" },
      }}
    >
      <styled.div css={{ pos: "relative", display: "grid", w: "full", gap: "4" }}>
        <styled.div
          css={{
            pos: "absolute",
            inset: "0",
            right: "4",
            backgroundImage: "radial-gradient(#d4d4d4 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            _dark: {
              backgroundImage: "radial-gradient(#404040 1px, transparent 1px)",
            },
          }}
        ></styled.div>
        <ResizablePanelGroup
          direction="horizontal"
          css={{
            pos: "relative",
            zIndex: "10",
            _after: {
              content: '""',
              pos: "absolute",
              inset: "0",
              right: "3",
              zIndex: "0",
              bg: "#323232/50",
              rounded: "xl",
            },
          }}
        >
          <ResizablePanel
            ref={resizablePanelRef}
            css={{
              bg: "bg",
              pos: "relative",
              aspectRatio: "4/2.5",
              overflow: "hidden",
              rounded: "lg",
              borderWidth: "1px",
              md: {
                aspectRatio: "auto",
                rounded: "xl",
              },
            }}
            defaultSize={100}
            minSize={30}
          >
            <BlockViewerIframe />
          </ResizablePanel>
          <ResizableHandle
            css={{
              pos: "relative",
              display: "none",
              w: "3",
              bg: "transparent",
              p: "0",
              md: { display: "block" },
              _after: {
                content: '""',
                bg: "border",
                pos: "absolute",
                top: "50%",
                right: "0",
                h: "8",
                w: "6px",
                transform: "translateX(-1px) translateY(-50%)",
                rounded: "full",
                transition: "all",
                _hover: {
                  h: "10",
                },
              },
            }}
          />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </styled.div>
    </styled.div>
  );
}

function BlockViewerMobile({ children }: { children: React.ReactNode }) {
  const { item } = useBlockViewer();

  return (
    <styled.div css={{ display: "flex", flexDir: "column", gap: "2", lg: { display: "none" } }}>
      <styled.div css={{ display: "flex", alignItems: "center", gap: "2", px: "2" }}>
        <styled.div css={{ lineClamp: "1", textStyle: "sm", fontWeight: "medium" }}>
          {item.description}
        </styled.div>
        <styled.div
          css={{
            color: "muted.fg",
            ml: "auto",
            flexShrink: "0",
            fontFamily: "mono",
            textStyle: "xs",
          }}
        >
          {item.name}
        </styled.div>
      </styled.div>
      {item.meta?.mobile === "component" && children}
      {/* {item.meta?.mobile === "component" ? (
        children
      ) : (
        <div className="overflow-hidden rounded-xl border">
          <Image
            src={`/r/styles/default/${item.name}-light.png`}
            alt={item.name}
            data-block={item.name}
            width={1440}
            height={900}
            className="object-cover dark:hidden"
          />
          <Image
            src={`/r/styles/default/${item.name}-dark.png`}
            alt={item.name}
            data-block={item.name}
            width={1440}
            height={900}
            className="hidden object-cover dark:block"
          />
        </div>
      )} */}
    </styled.div>
  );
}

function BlockViewerCode() {
  const { activeFile, highlightedFiles } = useBlockViewer();

  const file = useMemo(() => {
    return highlightedFiles?.find((file) => file.target === activeFile);
  }, [highlightedFiles, activeFile]);

  if (!file) {
    return null;
  }

  const language = file.path.split(".").pop() ?? "tsx";

  return (
    <styled.div
      css={{
        bg: "surface",
        color: "surface.fg",
        mr: "14px",
        display: "flex",
        overflow: "hidden",
        rounded: "xl",
        borderWidth: "1px",
        ".block-view-wrapper[data-view=preview] &": {
          display: "none",
        },
        md: { h: "var(--height)" },
      }}
    >
      <styled.div css={{ w: "72" }}>
        <BlockViewerFileTree />
      </styled.div>
      <styled.figure
        css={{
          mx: "0!",
          mt: "0",
          display: "flex",
          minW: "0",
          flex: "1",
          flexDir: "column",
          rounded: "xl",
          borderStyle: "none",
        }}
      >
        <styled.figcaption
          data-language={language}
          css={{
            color: "surface.fg",
            display: "flex",
            h: "12",
            flexShrink: "0",
            alignItems: "center",
            gap: "2",
            borderBottomWidth: "1px",
            px: "4",
            py: "2",
            textStyle: "sm",
            "& svg": {
              color: "surface.fg",
              w: "4",
              h: "4",
              opacity: "0.7",
            },
          }}
        >
          {file.target}
          <styled.div css={{ ml: "auto", display: "flex", alignItems: "center", gap: "2" }}>
            <BlockCopyCodeButton />
          </styled.div>
        </styled.figcaption>
        <styled.div
          key={file?.path}
          dangerouslySetInnerHTML={{ __html: file?.highlightedContent ?? "" }}
          css={{
            overflowY: "auto",
            px: "4",
            textStyle: "sm",
            _scrollbar: { display: "none" },
          }}
        />
      </styled.figure>
    </styled.div>
  );
}

export function BlockViewerFileTree() {
  const { tree } = useBlockViewer();

  if (!tree) {
    return null;
  }

  return (
    <SidebarProvider
      css={{ display: "flex", minH: "full!", flexDir: "column", borderRightWidth: "1px" }}
    >
      <Sidebar collapsible="none" css={{ w: "full", flex: "1" }}>
        <SidebarGroupLabel
          css={{ h: "12", rounded: "0", borderBottomWidth: "1px", px: "4", textStyle: "sm" }}
        >
          Files
        </SidebarGroupLabel>
        <SidebarGroup css={{ p: "0" }}>
          <SidebarGroupContent>
            <SidebarMenu css={{ gap: "1.5", transform: "translateX(0)" }}>
              {tree.map((file, index) => (
                <Tree key={index} item={file} index={1} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  );
}

function Tree({ item, index }: { item: FileTree; index: number }) {
  const { activeFile, setActiveFile } = useBlockViewer();

  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          isActive={item.path === activeFile}
          onClick={() => item.path && setActiveFile(item.path)}
          css={{
            rounded: "0",
            pl: "var(--index)",
            whiteSpace: "nowrap",
            _hover: {
              bg: "muted.fg/15",
            },
            _focus: {
              bg: "muted.fg/15",
            },
            _focusVisible: {
              bg: "muted.fg/15",
            },
            "&:active": {
              bg: "muted.fg/15",
            },
            "&[data-active=true]": {
              bg: "muted.fg/15",
            },
          }}
          data-index={index}
          style={
            {
              "--index": `${index * (index === 2 ? 1.2 : 1.3)}rem`,
            } as React.CSSProperties
          }
        >
          <LuChevronRight className={css({ visibility: "hidden" })} />
          <LuFile className={css({ w: "4", h: "4" })} />
          {item.name}
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        css={{
          "&[data-state=open] > button > svg:first-child": {
            transform: "rotate(90deg)",
          },
        }}
        defaultOpen
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            css={{
              rounded: "0",
              pl: "var(--index)",
              whiteSpace: "nowrap",
              _hover: {
                bg: "muted.fg/15",
              },
              _focus: {
                bg: "muted.fg/15",
              },
              _focusVisible: {
                bg: "muted.fg/15",
              },
              "&:active": {
                bg: "muted.fg/15",
              },
              "&[data-active=true]": {
                bg: "muted.fg/15",
              },
            }}
            style={
              {
                "--index": `${index * (index === 1 ? 1 : 1.2)}rem`,
              } as React.CSSProperties
            }
          >
            <LuChevronRight className={css({ transition: "transform" })} />
            <LuFolder />
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub
            css={{ m: "0", w: "full", transform: "translateX(0)", borderStyle: "none", p: "0" }}
          >
            {item.children.map((subItem, key) => (
              <Tree key={key} item={subItem} index={index + 1} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}

function BlockCopyCodeButton() {
  const { activeFile, item } = useBlockViewer();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const file = useMemo(() => {
    return item.files?.find((file) => file.target === activeFile);
  }, [activeFile, item.files]);

  const content = file?.content;

  if (!content) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      css={{ w: "7", h: "7" }}
      onClick={() => {
        copyToClipboard(content);
      }}
    >
      {isCopied ? <LuCheck /> : <LuClipboard />}
    </Button>
  );
}

function BlockViewer({
  item,
  tree,
  highlightedFiles,
  children,
  ...props
}: Pick<BlockViewerContextValue, "item" | "tree" | "highlightedFiles"> & {
  children: React.ReactNode;
}) {
  return (
    <BlockViewerProvider item={item} tree={tree} highlightedFiles={highlightedFiles} {...props}>
      <BlockViewerToolbar />
      <BlockViewerView />
      <BlockViewerCode />
      <BlockViewerMobile>{children}</BlockViewerMobile>
    </BlockViewerProvider>
  );
}

export { BlockViewer };
