import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemMedia,
  ItemTitle,
} from "@/registry/default/ui/item";
import { Progress } from "@/registry/default/ui/progress";
import { Spinner } from "@/registry/default/ui/spinner";

export default function SpinnerItem() {
  return (
    <styled.div css={{ display: "flex", w: "full", maxW: "md", flexDir: "column", gap: "4" }}>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Downloading...</ItemTitle>
          <ItemDescription>129 MB / 1000 MB</ItemDescription>
        </ItemContent>
        <ItemActions css={{ display: "none", sm: { display: "flex" } }}>
          <Button variant="outline" size="sm" css={{ rounded: "1rem" }}>
            Cancel
          </Button>
        </ItemActions>
        <ItemFooter>
          <Progress value={75} css={{ h: "2" }} />
        </ItemFooter>
      </Item>
    </styled.div>
  );
}
