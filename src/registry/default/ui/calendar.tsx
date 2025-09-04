"use client";

import * as React from "react";
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type DayPickerProps,
} from "react-day-picker";
import { LuChevronDown, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { button, type ButtonVariantProps } from "styled-system/recipes";
import { Button } from "@/registry/default/ui/button";

function CalendarBase({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: DayPickerProps & {
  buttonVariant?: ButtonVariantProps["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cx(
        css({
          bg: "bg",
          p: "3",
          "--cell-size": "2rem",
          ".card__content &": {
            bg: "transparent",
          },
          ".popover__content &": {
            bg: "transparent",
          },
          "&[dir='rtl'] .rdp-button_next > svg": {
            transform: "rotate(180deg)",
          },
          "&[dir='rtl'] .rdp-button_previous > svg": {
            transform: "rotate(180deg)",
          },
        }),
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cx(defaultClassNames.root, css({ w: "fit" })),
        months: cx(
          defaultClassNames.months,
          css({
            pos: "relative",
            display: "flex",
            flexDir: "column",
            gap: "4",
            md: { flexDir: "row" },
          })
        ),
        month: cx(
          defaultClassNames.month,
          css({ display: "flex", flexDir: "column", w: "full", gap: "4" })
        ),
        nav: cx(
          defaultClassNames.nav,
          css({
            pos: "absolute",
            top: "0",
            insetX: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1",
            w: "full",
          })
        ),
        button_previous: cx(
          defaultClassNames.button_previous,
          button({ variant: buttonVariant }),
          css({
            w: "var(--cell-size)",
            h: "var(--cell-size)",
            p: "0",
            userSelect: "none",
            _disabled: { opacity: "0.5" },
          })
        ),
        button_next: cx(
          defaultClassNames.button_next,
          button({ variant: buttonVariant }),
          css({
            w: "var(--cell-size)",
            h: "var(--cell-size)",
            p: "0",
            userSelect: "none",
            _disabled: { opacity: "0.5" },
          })
        ),
        month_caption: cx(
          defaultClassNames.month_caption,
          css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            w: "full",
            h: "var(--cell-size)",
            px: "var(--cell-size)",
          })
        ),
        dropdowns: cx(
          defaultClassNames.dropdowns,
          css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5",
            w: "full",
            h: "var(--cell-size)",
            textStyle: "sm",
            fontWeight: "medium",
          })
        ),
        dropdown_root: cx(
          defaultClassNames.dropdown_root,
          css({
            pos: "relative",
            borderWidth: "1px",
            borderColor: "input",
            rounded: "md",
            shadow: "xs",
            _focusWithin: {
              borderColor: "ring",
              outlineWidth: "3px",
              outlineStyle: "solid",
              outlineColor: "ring/50",
            },
          })
        ),
        dropdown: cx(
          defaultClassNames.dropdown,
          css({
            pos: "absolute",
            bg: "popover",
            inset: "0",
            opacity: "0",
          })
        ),
        caption_label: cx(
          defaultClassNames.caption_label,
          css({ userSelect: "none", fontWeight: "medium" }),
          captionLayout === "label"
            ? css({ textStyle: "sm" })
            : css({
                display: "flex",
                alignItems: "center",
                gap: "1",
                h: "8",
                pl: "2",
                pr: "1",
                rounded: "md",
                textStyle: "sm",
                "& > svg": {
                  color: "muted.fg",
                  w: "3.5",
                  h: "3.5",
                },
              })
        ),
        table: css({ w: "full", borderCollapse: "collapse" }),
        weekdays: cx(defaultClassNames.weekdays, css({ display: "flex" })),
        weekday: cx(
          defaultClassNames.weekday,
          css({
            color: "muted.fg",
            rounded: "md",
            flex: "1",
            fontWeight: "normal",
            fontSize: "0.8rem",
            userSelect: "none",
          })
        ),
        week: cx(defaultClassNames.week, css({ display: "flex", w: "full", mt: "2" })),
        week_number_header: cx(
          defaultClassNames.week_number_header,
          css({ userSelect: "none", w: "var(--cell-size)" })
        ),
        week_number: cx(
          defaultClassNames.week_number,
          css({ color: "muted.fg", fontSize: "0.8rem", userSelect: "none" })
        ),
        day: cx(
          defaultClassNames.day,
          css({
            pos: "relative",
            w: "full",
            h: "full",
            p: "0",
            textAlign: "center",
            "&:first-child[data-selected=true] button": {
              roundedLeft: "md",
            },
            "&:last-child[data-selected=true] button": {
              roundedRight: "md",
            },
            aspectRatio: "square",
            userSelect: "none",
          })
        ),
        range_start: cx(defaultClassNames.range_start, css({ bg: "accent", roundedLeft: "md" })),
        range_middle: cx(defaultClassNames.range_middle, css({ rounded: "0" })),
        range_end: cx(defaultClassNames.range_end, css({ bg: "accent", roundedRight: "md" })),
        today: cx(
          defaultClassNames.today,
          css({
            bg: "accent",
            color: "accent.fg",
            rounded: "md",
            "&[data-selected=true]": { rounded: "0" },
          })
        ),
        outside: cx(
          defaultClassNames.outside,
          css({ color: "muted.fg", "&[aria-selected]": { color: "muted.fg" } })
        ),
        disabled: cx(defaultClassNames.disabled, css({ color: "muted.fg", opacity: "0.5" })),
        hidden: cx(defaultClassNames.hidden, css({ visibility: "hidden" })),
        ...classNames,
      }}
      components={{
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return <LuChevronLeft className={cx(css({ w: "4", h: "4" }), className)} {...props} />;
          }

          if (orientation === "right") {
            return <LuChevronRight className={cx(css({ w: "4", h: "4" }), className)} {...props} />;
          }

          return <LuChevronDown className={cx(css({ w: "4", h: "4" }), className)} {...props} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  w: "var(--cell-size)",
                  h: "var(--cell-size)",
                  textAlign: "center",
                })}
              >
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cx(
        defaultClassNames.day,
        css({
          display: "flex",
          flexDir: "column",
          gap: "1",
          aspectRatio: "square",
          w: "full",
          minW: "var(--cell-size)",
          h: "auto",
          lineHeight: "none",
          fontWeight: "normal",
          "&[data-selected-single=true]": {
            bg: "primary",
            color: "primary.fg",
          },
          "&[data-range-middle=true]": {
            bg: "accent",
            color: "accent.fg",
            rounded: "0",
          },
          "&[data-range-start=true]": {
            bg: "primary",
            color: "primary.fg",
            rounded: "md",
          },
          "&[data-range-end=true]": {
            bg: "primary",
            color: "primary.fg",
            rounded: "md",
          },
          "& > span": {
            textStyle: "xs",
            opacity: "0.7",
          },
        }),
        className
      )}
      {...props}
    />
  );
}

const Calendar = styled(CalendarBase);

export { Calendar, CalendarDayButton };
