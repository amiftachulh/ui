import { LuPackageCheck, LuShoppingCart, LuTruck } from "react-icons/lu";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry/default/ui/timeline";

export default function TimelineHorizontal() {
  return (
    <Timeline orientation="horizontal" css={{ minH: "40" }}>
      <TimelineItem css={{ _before: { content: "''", flex: "1" } }}>
        <TimelineSeparator>
          <TimelineDot>
            <LuShoppingCart />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Ordered</TimelineTitle>
          <TimelineDescription css={{ whiteSpace: "nowrap" }}>
            9.15 AM, January 1, 2024
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem css={{ _after: { content: "''", flex: "1" } }}>
        <TimelineContent>
          <TimelineTitle>Shipped</TimelineTitle>
          <TimelineDescription css={{ whiteSpace: "nowrap" }}>
            12:20 PM, January 4, 2024
          </TimelineDescription>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot>
            <LuPackageCheck />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem css={{ _before: { content: "''", flex: "1" } }}>
        <TimelineSeparator>
          <TimelineDot>
            <LuTruck />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Out for Delivery</TimelineTitle>
          <TimelineDescription css={{ whiteSpace: "nowrap" }}>
            07:00 AM, January 8, 2024
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
