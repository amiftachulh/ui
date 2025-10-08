import { LuArrowUpRight } from "react-icons/lu";
import { TbFolderCode } from "react-icons/tb";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/default/ui/empty";

export default function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <TbFolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <styled.div css={{ display: "flex", gap: "2" }}>
          <Button>Create Project</Button>
          <Button variant="outline">Import Project</Button>
        </styled.div>
      </EmptyContent>
      <Button variant="link" asChild css={{ color: "muted.fg" }} size="sm">
        <a href="#">
          Learn More <LuArrowUpRight />
        </a>
      </Button>
    </Empty>
  );
}
