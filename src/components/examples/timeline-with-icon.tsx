import { LuCode, LuHeart, LuMoon, LuPizza } from "react-icons/lu";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

export default function TimelineWithIcon() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <LuPizza />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Eat</TimelineTitle>
          <TimelineDescription>Because you need strength</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <LuCode />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Code</TimelineTitle>
          <TimelineDescription>Because it&apos;s awesome!</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <LuMoon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Sleep</TimelineTitle>
          <TimelineDescription>Because you need rest</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <LuHeart />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Repeat</TimelineTitle>
          <TimelineDescription>Because this is the life you love!</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
