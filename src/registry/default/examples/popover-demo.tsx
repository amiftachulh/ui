import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent css={{ w: "80" }}>
        <styled.div css={{ display: "grid", gap: "4" }}>
          <styled.div css={{ spaceY: "2" }}>
            <styled.h4 css={{ fontWeight: "medium", lineHeight: "none" }}>Dimensions</styled.h4>
            <styled.p css={{ textStyle: "sm", color: "muted.fg" }}>
              Set the dimensions for the layer.
            </styled.p>
          </styled.div>
          <styled.div css={{ display: "grid", gap: "2" }}>
            <styled.div
              css={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                alignItems: "center",
                gap: "4",
              }}
            >
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" css={{ gridColumn: "span 2", h: "8" }} />
            </styled.div>
            <styled.div
              css={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                alignItems: "center",
                gap: "4",
              }}
            >
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" css={{ gridColumn: "span 2", h: "8" }} />
            </styled.div>
            <styled.div
              css={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                alignItems: "center",
                gap: "4",
              }}
            >
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" css={{ gridColumn: "span 2", h: "8" }} />
            </styled.div>
            <styled.div
              css={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                alignItems: "center",
                gap: "4",
              }}
            >
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input id="maxHeight" defaultValue="none" css={{ gridColumn: "span 2", h: "8" }} />
            </styled.div>
          </styled.div>
        </styled.div>
      </PopoverContent>
    </Popover>
  );
}
