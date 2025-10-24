import { LuPlus } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/default/ui/empty";

export function EmptyAvatarGroup() {
  return (
    <Empty css={{ flex: "none", borderWidth: "1px" }}>
      <EmptyHeader>
        <EmptyMedia>
          <styled.div
            css={{
              display: "flex",
              spaceX: "-2",
              "& > .avatar__root": {
                w: "12",
                h: "12",
                outlineWidth: "2px",
                outlineColor: "bg",
                filter: "grayscale(1)",
              },
            }}
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </styled.div>
        </EmptyMedia>
        <EmptyTitle>No Team Members</EmptyTitle>
        <EmptyDescription>Invite your team to collaborate on this project.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <LuPlus />
          Invite Members
        </Button>
      </EmptyContent>
    </Empty>
  );
}
