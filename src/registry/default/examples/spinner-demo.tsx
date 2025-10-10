import { styled } from "styled-system/jsx";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/registry/default/ui/item";
import { Spinner } from "@/registry/default/ui/spinner";

export default function SpinnerDemo() {
  return (
    <styled.div
      css={{ display: "flex", w: "full", maxW: "xs", flexDir: "column", gap: "4", rounded: "1rem" }}
    >
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle css={{ lineClamp: "1" }}>Processing payment...</ItemTitle>
        </ItemContent>
        <ItemContent css={{ flex: "none", justifyContent: "flex-end" }}>
          <styled.span css={{ textStyle: "sm", fontVariantNumeric: "tabular-nums" }}>
            $100.00
          </styled.span>
        </ItemContent>
      </Item>
    </styled.div>
  );
}
