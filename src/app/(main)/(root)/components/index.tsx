import { styled } from "styled-system/jsx";
import { FieldSeparator } from "@/registry/default/ui/field";
import { AppearanceSettings } from "./appearance-settings";
import { ButtonGroupDemo } from "./button-group-demo";
import { ButtonGroupInputGroup } from "./button-group-input-group";
import { ButtonGroupNested } from "./button-group-nested";
import { ButtonGroupPopover } from "./button-group-popover";
import { EmptyAvatarGroup } from "./empty-avatar-group";
import { FieldCheckbox } from "./field-checkbox";
import { FieldDemo } from "./field-demo";
import { FieldHear } from "./field-hear";
import { FieldSlider } from "./field-slider";
import { InputGroupButtonExample } from "./input-group-button";
import { InputGroupDemo } from "./input-group-demo";
import { ItemDemo } from "./item-demo";
import { NotionPromptForm } from "./notion-prompt-form";
import { SpinnerBadge } from "./spinner-badge";
import { SpinnerEmpty } from "./spinner-empty";

export function RootComponents() {
  return (
    <styled.div
      css={{
        mx: "auto",
        display: "grid",
        gap: "8",
        py: "1",
        md: {
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        },
        lg: {
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        },
        xl: {
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "6",
        },
        "2xl": {
          gap: "8",
        },
      }}
    >
      <styled.div
        css={{
          display: "flex",
          flexDir: "column",
          gap: "6",
          "& > div": {
            w: "full",
            maxW: "full",
          },
        }}
      >
        <FieldDemo />
      </styled.div>
      <styled.div
        css={{
          display: "flex",
          flexDir: "column",
          gap: "6",
          "& > div": {
            w: "full",
            maxW: "full",
          },
        }}
      >
        <EmptyAvatarGroup />
        <SpinnerBadge />
        <ButtonGroupInputGroup />
        <FieldSlider />
        <InputGroupDemo />
      </styled.div>
      <styled.div
        css={{
          display: "flex",
          flexDir: "column",
          gap: "6",
          "& > div": {
            w: "full",
            maxW: "full",
          },
        }}
      >
        <InputGroupButtonExample />
        <ItemDemo />
        <FieldSeparator css={{ my: "4" }}>Appearance Settings</FieldSeparator>
        <AppearanceSettings />
      </styled.div>
      <styled.div
        css={{
          order: "-9999",
          display: "flex",
          flexDir: "column",
          gap: "6",
          "& > div": {
            w: "full",
            maxW: "full",
          },
          lg: { display: "none" },
          xl: {
            order: "9999",
            display: "flex",
          },
        }}
      >
        <NotionPromptForm />
        <ButtonGroupDemo />
        <FieldCheckbox />
        <styled.div css={{ display: "flex", justifyContent: "space-between", gap: "4" }}>
          <ButtonGroupNested />
          <ButtonGroupPopover />
        </styled.div>
        <FieldHear />
        <SpinnerEmpty />
      </styled.div>
    </styled.div>
  );
}
