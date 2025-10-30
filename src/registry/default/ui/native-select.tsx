"use client";

import { LuChevronDown } from "react-icons/lu";
import { css } from "styled-system/css";
import { createStyleContext, styled } from "styled-system/jsx";
import { nativeSelect } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(nativeSelect);

function NativeSelectBase(props: React.ComponentProps<"select">) {
  return (
    <styled.div
      className="group-native-select"
      data-slot="native-select-wrapper"
      css={{ pos: "relative", w: "fit", "&:has(select:disabled)": { opacity: "0.5" } }}
    >
      <select data-slot="native-select" {...props} />
      <LuChevronDown
        className={css({
          color: "muted.fg",
          pointerEvents: "none",
          pos: "absolute",
          top: "50%",
          right: "3.5",
          w: "4",
          h: "4",
          transform: "translateY(-50%)",
          opacity: "0.5",
          userSelect: "none",
        })}
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </styled.div>
  );
}

const NativeSelect = withProvider(NativeSelectBase, "root");

const NativeSelectOption = withContext("option", "option", {
  defaultProps: {
    "data-slot": "native-select-option",
  } as Partial<React.ComponentProps<"option">>,
});

const NativeSelectOptGroup = withContext("optgroup", "optGroup", {
  defaultProps: {
    "data-slot": "native-select-optgroup",
  } as Partial<React.ComponentProps<"optgroup">>,
});

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
