"use client";

import * as React from "react";
import { LuGripVertical } from "react-icons/lu";
import * as ResizablePrimitive from "react-resizable-panels";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { resizable } from "styled-system/recipes";

const classes = resizable();

const ResizablePanelGroup = styled(function PanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return <ResizablePrimitive.PanelGroup className={cx(classes.panelGroup, className)} {...props} />;
});
ResizablePanelGroup.displayName = ResizablePrimitive.PanelGroup.displayName;

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = styled(function Handle({
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
});
ResizableHandle.displayName = ResizablePrimitive.PanelResizeHandle.displayName;

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
