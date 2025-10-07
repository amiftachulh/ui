import { LuLoader } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/default/ui/input-group";
import { Spinner } from "@/registry/default/ui/spinner";

export default function InputGroupSpinner() {
  return (
    <styled.div css={{ display: "grid", w: "full", maxW: "sm", gap: "4" }}>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Searching..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Processing..." disabled />
        <InputGroupAddon>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Saving changes..." disabled />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Saving...</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Refreshing data..." disabled />
        <InputGroupAddon>
          <LuLoader className={css({ animation: "spin" })} />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText css={{ color: "muted.fg" }}>Please wait...</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </styled.div>
  );
}
