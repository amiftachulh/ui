import { LuCopy } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

export function PresetShare() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Share</Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        css={{ display: "flex", w: "520px", flexDir: "column", gap: "4" }}
      >
        <styled.div
          css={{
            display: "flex",
            flexDir: "column",
            gap: "1",
            textAlign: "center",
            sm: { textAlign: "left" },
          }}
        >
          <styled.h3 css={{ textStyle: "lg", fontWeight: "semibold" }}>Share preset</styled.h3>
          <styled.p css={{ color: "muted.fg", textStyle: "sm" }}>
            Anyone who has this link and an OpenAI account will be able to view this.
          </styled.p>
        </styled.div>
        <styled.div css={{ pos: "relative", flex: "1" }}>
          <Label htmlFor="link" css={{ srOnly: true }}>
            Link
          </Label>
          <Input
            id="link"
            defaultValue="https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003"
            readOnly
            css={{ h: "9", pr: "10" }}
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            css={{ pos: "absolute", top: "1", right: "1", w: "7", h: "7" }}
          >
            <styled.span css={{ srOnly: true }}>Copy</styled.span>
            <LuCopy className={css({ w: "3.5", h: "3.5" })} />
          </Button>
        </styled.div>
      </PopoverContent>
    </Popover>
  );
}
