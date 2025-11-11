"use client";

import * as React from "react";
import { LuGripVertical } from "react-icons/lu";
import * as ResizablePrimitive from "react-resizable-panels";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { resizable } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(resizable);

const ResizablePanelGroup = withProvider(ResizablePrimitive.PanelGroup, "panelGroup", {
  defaultProps: {
    "data-slot": "resizable-panel-group",
  },
});

const ResizablePanel = withContext(ResizablePrimitive.Panel, "panel", {
  defaultProps: {
    "data-slot": "resizable-panel",
  },
});

function Handle({
  withHandle,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & { withHandle?: boolean }) {
  return (
    <ResizablePrimitive.PanelResizeHandle data-slot="resizable-handle" {...props}>
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
