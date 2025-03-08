"use client";

import * as React from "react";
import { LuGripVertical } from "react-icons/lu";
import * as ResizablePrimitive from "react-resizable-panels";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { resizable } from "styled-system/recipes";

const classes = resizable();

function PanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cx(classes.panelGroup, className)}
      {...props}
    />
  );
}
const ResizablePanelGroup = styled(PanelGroup);
ResizablePanelGroup.displayName = ResizablePrimitive.PanelGroup.displayName;

function Panel(props: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}
const ResizablePanel = styled(Panel);
ResizablePanel.displayName = ResizablePrimitive.Panel.displayName;

function Handle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & { withHandle?: boolean }) {
  return (
    <ResizablePrimitive.PanelResizeHandle className={cx(classes.handle, className)} {...props}>
      {withHandle && (
        <div
          className={css({
            zIndex: "10",
            display: "flex",
            w: "3",
            h: "4",
            alignItems: "center",
            justifyContent: "center",
            rounded: "sm",
            borderWidth: "1px",
            bg: "border",
          })}
        >
          <LuGripVertical className={css({ w: "2.5", h: "2.5" })} />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}
const ResizableHandle = styled(Handle);
ResizableHandle.displayName = ResizablePrimitive.PanelResizeHandle.displayName;

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
