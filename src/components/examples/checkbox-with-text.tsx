import { css } from "styled-system/css";
import { flex, grid } from "styled-system/patterns";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxWithText() {
  return (
    <div className={flex({ spaceX: "2" })}>
      <Checkbox id="terms1" />
      <div className={grid({ gap: "1.5", lineHeight: "none" })}>
        <Label htmlFor="terms1">Accept terms and conditions</Label>
        <p className={css({ textStyle: "sm", color: "fg.muted" })}>
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
