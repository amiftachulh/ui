import { styled } from "styled-system/jsx";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SwitchDemo() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", spaceX: "2" }}>
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </styled.div>
  );
}
