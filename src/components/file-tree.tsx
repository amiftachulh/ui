import * as React from "react";
import { LuChevronRight, LuFile, LuFolder } from "react-icons/lu";
import * as Accordion from "@radix-ui/react-accordion";
import { css } from "styled-system/css";
import { Separator } from "./ui/separator";

const FileTree = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  defaultValue: string[];
}) => {
  return (
    <Accordion.Root
      type="multiple"
      className={css({
        pos: "relative",
        overflow: "hidden",
        my: "2",
        p: "2",
        rounded: "md",
        borderWidth: "1px",
      })}
      {...props}
    >
      {children}
    </Accordion.Root>
  );
};
FileTree.displayName = "FileTree";

interface FileTreeItemProps {
  name: string;
  children: React.ReactNode;
  type: "file" | "folder";
  noIcon?: boolean;
  disabled?: boolean;
}
const FileTreeItem = ({ name, children, type = "file", noIcon, disabled }: FileTreeItemProps) => {
  if (type === "file") {
    return (
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "2",
          py: "1",
          px: "6",
          textStyle: "sm",
          rounded: "md",
          _hover: {
            bg: "primary/10",
          },
          "&[aria-disabled=true]": {
            opacity: "0.5",
          },
        })}
        aria-disabled={disabled}
      >
        <div className={css({ w: "4", h: "4" })}>
          {!noIcon && <LuFile className={css({ w: "4", h: "4" })} />}
        </div>
        <span>{name}</span>
      </div>
    );
  }

  return (
    <Accordion.Item
      value={name}
      className={css({ "&[aria-disabled=true]": { opacity: "0.5" } })}
      disabled={disabled}
    >
      <Accordion.Header className={css({ display: "flex" })}>
        <Accordion.Trigger
          className={css({
            pos: "relative",
            display: "flex",
            alignItems: "center",
            gap: "2",
            w: "full",
            py: "1",
            px: "6",
            textStyle: "sm",
            rounded: "md",
            _hover: {
              bg: "primary/10",
            },
          })}
        >
          <LuChevronRight
            className={css({
              pos: "absolute",
              left: "0.5",
              w: "4",
              h: "4",
              transition: "transform",
              "[data-state=open] > &": { rotate: "90deg" },
            })}
          />
          <div className={css({ w: "4", h: "4" })}>
            {!noIcon && <LuFolder className={css({ w: "4", h: "4" })} />}
          </div>
          <span>{name}</span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content
        className={css({
          pos: "relative",
          pl: "6",
          overflow: "hidden",
        })}
      >
        <Separator css={{ pos: "absolute", left: "0.5625rem" }} decorative orientation="vertical" />
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
};
FileTreeItem.displayName = "FileTreeItem";

export { FileTree, FileTreeItem };
