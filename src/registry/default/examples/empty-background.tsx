import { LuRefreshCcw } from "react-icons/lu";
import { TbBell } from "react-icons/tb";
import { Button } from "@/registry/default/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/default/ui/empty";

export default function EmptyMuted() {
  return (
    <Empty
      css={{
        bgGradient: "to-b",
        gradientFrom: "muted/50",
        gradientFromPosition: "30%",
        gradientTo: "bg",
        h: "full",
      }}
    >
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <TbBell />
        </EmptyMedia>
        <EmptyTitle>No Notifications</EmptyTitle>
        <EmptyDescription>
          You&apos;re all caught up. New notifications will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          <LuRefreshCcw />
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  );
}
