"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { createStyleContext } from "styled-system/jsx";
import { timeline } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(timeline);

type TimelineContextProps = {
  orientation: "horizontal" | "vertical";
};

const TimelineContext = React.createContext<TimelineContextProps | null>(null);

function useTimeline() {
  const context = React.useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within a <Timeline />.");
  }

  return context;
}

function Root({
  orientation = "vertical",
  ...props
}: React.ComponentProps<"ol"> & {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <TimelineContext value={{ orientation }}>
      <ol role="list" data-slot="timeline" data-orientation={orientation} {...props} />
    </TimelineContext>
  );
}
const Timeline = withProvider(Root, "root");

function Item({
  asChild,
  ...props
}: React.ComponentProps<"li"> & {
  asChild?: boolean;
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "li";

  return <Comp data-slot="timeline-item" data-orientation={orientation} {...props} />;
}
const TimelineItem = withContext(Item, "item");

function Separator({
  asChild,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "div";

  return <Comp data-slot="timeline-separator" data-orientation={orientation} {...props} />;
}
const TimelineSeparator = withContext(Separator, "separator");

function Dot({
  variant = "default",
  asChild,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "outline";
  asChild?: boolean;
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="timeline-dot"
      data-orientation={orientation}
      data-variant={variant}
      {...props}
    />
  );
}
const TimelineDot = withContext(Dot, "dot");

function Connector({
  asChild,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "div";

  return <Comp data-slot="timeline-connector" data-orientation={orientation} {...props} />;
}
const TimelineConnector = withContext(Connector, "connector");

function Content({ asChild, ...props }: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "div";

  return <Comp data-slot="timeline-content" data-orientation={orientation} {...props} />;
}
const TimelineContent = withContext(Content, "content");

function Title({
  asChild,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "div";

  return <Comp data-slot="timeline-title" data-orientation={orientation} {...props} />;
}
const TimelineTitle = withContext(Title, "title");

function Description({
  asChild,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "div";

  return <Comp data-slot="timeline-description" data-orientation={orientation} {...props} />;
}
const TimelineDescription = withContext(Description, "description");

export {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  useTimeline,
};
