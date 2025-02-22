"use client";

import * as React from "react";
import { LuFile, LuFolder, LuFolderOpen } from "react-icons/lu";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { css, cx } from "styled-system/css";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type TreeViewElement = {
  id: string;
  name: string;
  isSelectable?: boolean;
  children?: TreeViewElement[];
};

type TreeContextProps = {
  selectedId: string | undefined;
  expandedItems: string[] | undefined;
  indicator: boolean;
  handleExpand: (id: string) => void;
  selectItem: (id: string) => void;
  setExpandedItems?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  direction: "rtl" | "ltr";
};

const TreeContext = React.createContext<TreeContextProps | null>(null);

const useTree = () => {
  const context = React.useContext(TreeContext);
  if (!context) {
    throw new Error("useTree must be used within a TreeProvider");
  }
  return context;
};

type TreeViewComponentProps = React.ComponentProps<"div">;

type Direction = "rtl" | "ltr" | undefined;

type TreeViewProps = {
  initialSelectedId?: string;
  indicator?: boolean;
  elements?: TreeViewElement[];
  initialExpandedItems?: string[];
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
} & TreeViewComponentProps;

const Tree = ({
  ref,
  className,
  elements,
  initialSelectedId,
  initialExpandedItems,
  children,
  indicator = true,
  openIcon,
  closeIcon,
  dir,
  ...props
}: TreeViewProps) => {
  const [selectedId, setSelectedId] = React.useState<string | undefined>(initialSelectedId);
  const [expandedItems, setExpandedItems] = React.useState<string[] | undefined>(
    initialExpandedItems
  );

  const selectItem = React.useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const handleExpand = React.useCallback((id: string) => {
    setExpandedItems((prev) => {
      if (prev?.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...(prev ?? []), id];
    });
  }, []);

  const expandSpecificTargetedElements = React.useCallback(
    (elements?: TreeViewElement[], selectId?: string) => {
      if (!elements || !selectId) return;
      const findParent = (currentElement: TreeViewElement, currentPath: string[] = []) => {
        const isSelectable = currentElement.isSelectable ?? true;
        const newPath = [...currentPath, currentElement.id];
        if (currentElement.id === selectId) {
          if (isSelectable) {
            setExpandedItems((prev) => [...(prev ?? []), ...newPath]);
          } else {
            if (newPath.includes(currentElement.id)) {
              newPath.pop();
              setExpandedItems((prev) => [...(prev ?? []), ...newPath]);
            }
          }
          return;
        }
        if (isSelectable && currentElement.children && currentElement.children.length > 0) {
          currentElement.children.forEach((child) => {
            findParent(child, newPath);
          });
        }
      };
      elements.forEach((element) => {
        findParent(element);
      });
    },
    []
  );

  React.useEffect(() => {
    if (initialSelectedId) {
      expandSpecificTargetedElements(elements, initialSelectedId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialSelectedId, elements]);

  const direction = dir === "rtl" ? "rtl" : "ltr";

  return (
    <TreeContext.Provider
      value={{
        selectedId,
        expandedItems,
        handleExpand,
        selectItem,
        setExpandedItems,
        indicator,
        openIcon,
        closeIcon,
        direction,
      }}
    >
      <div className={cx(css({ w: "full", h: "full" }), className)}>
        <ScrollArea
          ref={ref}
          className={css({ pos: "relative", h: "full", px: "2" })}
          dir={dir as Direction}
        >
          <AccordionPrimitive.Root
            {...props}
            type="multiple"
            defaultValue={expandedItems}
            value={expandedItems}
            className={css({ display: "flex", flexDir: "column", gap: "1" })}
            onValueChange={(value) => setExpandedItems((prev) => [...(prev ?? []), value[0]])}
            dir={dir as Direction}
          >
            {children}
          </AccordionPrimitive.Root>
        </ScrollArea>
      </div>
    </TreeContext.Provider>
  );
};

Tree.displayName = "Tree";

const TreeIndicator = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { direction } = useTree();

  return (
    <div
      dir={direction}
      className={cx(
        css({
          pos: "absolute",
          left: "1.5",
          h: "full",
          w: "1px",
          rounded: "md",
          bg: "muted",
          py: "3",
          transitionDuration: "normal",
          transitionTimingFunction: "ease-in-out",
          _hover: { bg: "slate.300" },
          _rtl: { right: 1.5 },
        }),
        className
      )}
      {...props}
    />
  );
};

TreeIndicator.displayName = "TreeIndicator";

type FolderComponentProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;

type FolderProps = {
  expandedItems?: string[];
  element: string;
  isSelectable?: boolean;
  isSelect?: boolean;
} & FolderComponentProps;

const Folder = ({
  className,
  element,
  value,
  isSelectable = true,
  isSelect,
  children,
  ...props
}: React.ComponentProps<"div"> & FolderProps) => {
  const {
    direction,
    handleExpand,
    expandedItems,
    indicator,
    setExpandedItems,
    openIcon,
    closeIcon,
  } = useTree();

  return (
    <AccordionPrimitive.Item
      {...props}
      value={value}
      className={css({ pos: "relative", h: "full", overflow: "hidden" })}
    >
      <AccordionPrimitive.Trigger
        className={cx(
          css({ display: "flex", alignItems: "center", gap: "1", rounded: "md", textStyle: "sm" }),
          isSelect && isSelectable && css({ bg: "muted" }),
          isSelectable && css({ cursor: "pointer" }),
          !isSelectable && css({ cursor: "not-allowed", opacity: "0.5" }),
          className
        )}
        disabled={!isSelectable}
        onClick={() => handleExpand(value)}
      >
        {expandedItems?.includes(value)
          ? (openIcon ?? <LuFolderOpen className={css({ w: "4", h: "4" })} />)
          : (closeIcon ?? <LuFolder className={css({ w: "4", h: "4" })} />)}
        <span>{element}</span>
      </AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content
        className={css({
          pos: "relative",
          h: "full",
          overflow: "hidden",
          textStyle: "sm",
          "&[data-state=open]": {
            animation: "accordion-down",
          },
          "&[data-state=closed]": {
            animation: "accordion-up",
          },
        })}
      >
        {element && indicator && <TreeIndicator aria-hidden="true" />}
        <AccordionPrimitive.Root
          dir={direction}
          type="multiple"
          className={css({
            ml: "5",
            display: "flex",
            flexDir: "column",
            gap: "1",
            py: "1",
            _rtl: { mr: "5" },
          })}
          defaultValue={expandedItems}
          value={expandedItems}
          onValueChange={(value) => {
            setExpandedItems?.((prev) => [...(prev ?? []), value[0]]);
          }}
        >
          {children}
        </AccordionPrimitive.Root>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
};

Folder.displayName = "Folder";

const File = ({
  value,
  className,
  isSelectable = true,
  isSelect,
  fileIcon,
  children,
  ...props
}: React.ComponentProps<"button"> & {
  value: string;
  handleSelect?: (id: string) => void;
  isSelectable?: boolean;
  isSelect?: boolean;
  fileIcon?: React.ReactNode;
}) => {
  const { selectedId, selectItem } = useTree();
  const isSelected = isSelect ?? selectedId === value;
  return (
    <button
      type="button"
      disabled={!isSelectable}
      className={cx(
        css({
          display: "flex",
          w: "fit",
          alignItems: "center",
          gap: "1",
          rounded: "md",
          pr: "1",
          textStyle: "sm",
          transitionDuration: "fast",
          transitionTimingFunction: "ease-in-out",
          _rtl: { pl: "1", pr: "0" },
        }),
        isSelected && isSelectable && css({ bg: "muted" }),
        isSelectable ? css({ cursor: "pointer" }) : css({ cursor: "not-allowed", opacity: "0.5" }),
        className
      )}
      onClick={() => selectItem(value)}
      {...props}
    >
      {fileIcon ?? <LuFile className="size-4" />}
      {children}
    </button>
  );
};

File.displayName = "File";

const CollapseButton = ({
  className,
  elements,
  expandAll = false,
  children,
  ...props
}: React.ComponentProps<"button"> & {
  elements: TreeViewElement[];
  expandAll?: boolean;
}) => {
  const { expandedItems, setExpandedItems } = useTree();

  const expendAllTree = React.useCallback((elements: TreeViewElement[]) => {
    const expandTree = (element: TreeViewElement) => {
      const isSelectable = element.isSelectable ?? true;
      if (isSelectable && element.children && element.children.length > 0) {
        setExpandedItems?.((prev) => [...(prev ?? []), element.id]);
        element.children.forEach(expandTree);
      }
    };

    elements.forEach(expandTree);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeAll = React.useCallback(() => {
    setExpandedItems?.([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    console.log(expandAll);
    if (expandAll) {
      expendAllTree(elements);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandAll]);

  return (
    <Button
      variant="ghost"
      className={cx(
        css({ pos: "absolute", bottom: "1", right: "2", h: "8", w: "fit", p: "1" }),
        className
      )}
      onClick={expandedItems && expandedItems.length > 0 ? closeAll : () => expendAllTree(elements)}
      {...props}
    >
      {children}
      <span className="sr-only">Toggle</span>
    </Button>
  );
};

CollapseButton.displayName = "CollapseButton";

export { CollapseButton, File, Folder, Tree, type TreeViewElement };
