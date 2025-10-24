import { Button } from "@/registry/default/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/default/ui/empty";
import { Spinner } from "@/registry/default/ui/spinner";

export function SpinnerEmpty() {
  return (
    <Empty css={{ w: "full", borderWidth: "1px", md: { p: "6" } }}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner css={{ w: "4", h: "4" }} />
        </EmptyMedia>
        <EmptyTitle>Processing your request</EmptyTitle>
        <EmptyDescription>
          Please wait while we process your request. Do not refresh the page.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
  );
}
