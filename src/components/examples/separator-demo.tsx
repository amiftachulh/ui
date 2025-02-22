import { css } from "styled-system/css";
import { Separator } from "@/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div className={css({ w: "full", maxW: "18.75rem", mx: "3.5" })}>
      <div className={css({ fontWeight: "medium" })}>Radix Primitives</div>
      <div>An open-source UI component library.</div>
      <Separator className={css({ my: "3.5" })} />
      <div style={{ display: "flex", height: 20, alignItems: "center" }}>
        <div>Blog</div>
        <Separator className={css({ mx: "3.5" })} decorative orientation="vertical" />
        <div className="Text">Docs</div>
        <Separator className={css({ mx: "3.5" })} decorative orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
