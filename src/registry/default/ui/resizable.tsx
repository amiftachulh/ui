"use client";

import * as React from "react";
import { LuGripVertical } from "react-icons/lu";
import * as ResizablePrimitive from "react-resizable-panels";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { resizable } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(resizable);

const ResizablePanelGroup = withProvider(ResizablePrimitive.PanelGroup, "panelGroup");
const ResizablePanel = withContext(ResizablePrimitive.Panel, "panel");

function Handle({
  withHandle,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & { withHandle?: boolean }) {
  return (
    <ResizablePrimitive.PanelResizeHandle {...props}>
      {withHandle && (
        <div
          className={css({
            zIndex: "10",
            w: "3",
            h: "4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bg: "border",
            borderWidth: "1px",
            rounded: "xs",
          })}
        >
          <LuGripVertical className={css({ w: "2.5", h: "2.5" })} />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}
const ResizableHandle = withContext(Handle, "handle");

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
