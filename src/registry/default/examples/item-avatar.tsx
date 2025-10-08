import { LuPlus } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/default/ui/item";

export default function ItemAvatar() {
  return (
    <styled.div css={{ display: "flex", w: "full", maxW: "lg", flexDir: "column", gap: "6" }}>
      <Item variant="outline">
        <ItemMedia>
          <Avatar css={{ w: "10", h: "10" }}>
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="icon-sm" variant="outline" css={{ rounded: "full" }} aria-label="Invite">
            <LuPlus />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <styled.div
            css={{
              display: "flex",
              spaceX: "-2",
              "& > .avatar__root": {
                outlineWidth: "2px",
                outlineColor: "bg",
                filter: "grayscale(1)",
              },
            }}
          >
            <Avatar css={{ display: "none", sm: { display: "flex" } }}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar css={{ display: "none", sm: { display: "flex" } }}>
              <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </styled.div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>No Team Members</ItemTitle>
          <ItemDescription>Invite your team to collaborate on this project.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Invite
          </Button>
        </ItemActions>
      </Item>
    </styled.div>
  );
}
