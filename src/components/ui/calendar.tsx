import * as React from "react";
import { DayPicker } from "react-day-picker";
import { css, cx } from "styled-system/css";
import { flex } from "styled-system/patterns";

const Calendar = ({ className, classNames, ...props }: React.ComponentProps<typeof DayPicker>) => {
  return (
    <DayPicker
      showOutsideDays
      className={cx(css({ p: "3" }), className)}
      classNames={{
        months: flex({
          flexDir: "column",
          spaceY: "4",
          sm: {
            flexDir: "row",
            spaceX: "4",
            spaceY: "0",
          },
        }),
        month: css({ spaceY: "4" }),
      }}
    />
  );
};
