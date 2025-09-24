import { styled } from "styled-system/jsx";
import { SettingsDialog } from "@/registry/default/blocks/sidebar-13/components/settings-dialog";

export default function Page() {
  return (
    <styled.div css={{ display: "flex", h: "svh", alignItems: "center", justifyContent: "center" }}>
      <SettingsDialog />
    </styled.div>
  );
}
