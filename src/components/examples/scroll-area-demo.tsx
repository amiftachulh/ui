import { css } from "styled-system/css";
import { ScrollArea } from "@/components/ui/scroll-area";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className={css({ w: "48", h: "72", rounded: "md", borderWidth: "1px" })}>
      <div className={css({ p: "4" })}>
        <h4 className={css({ mb: "4", textStyle: "sm", fontWeight: "medium", lineHeight: "none" })}>
          Tags
        </h4>
        <div className={css({ divideY: "1px" })}>
          {tags.map((tag) => (
            <div
              key={tag}
              className={css({ py: "2", textStyle: "sm", _first: { pt: "0" }, _last: { pb: "0" } })}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
