"use client";

import * as React from "react";
import { DayPicker, useDayPicker } from "react-day-picker";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { css, cx } from "styled-system/css";
import { button } from "styled-system/recipes";
import { Button } from "@/components/ui/button";

type View = "day" | "month" | "year";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  showSwitcher?: boolean;
  minYear?: number;
  maxYear?: number;
};

const Calendar = ({
  className,
  classNames,
  showSwitcher = true,
  minYear,
  maxYear,
  ...props
}: CalendarProps) => {
  const [view, setView] = React.useState<View>("day");

  return (
    <DayPicker
      showOutsideDays
      className={cx(css({ p: "3" }), className)}
      classNames={{
        months: css({
          pos: "relative",
          display: "flex",
          flexDir: { base: "column", sm: "row" },
          "& > *:not(:first-of-type)": {
            mt: "4",
            sm: {
              ms: "4",
              mt: "0",
            },
          },
        }),
        month: css({ spaceY: "4" }),
        month_caption: css({
          pos: "relative",
          mx: "10",
          display: "flex",
          h: "7",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "medium",
        }),
        caption_label: css({ textStyle: "sm", fontWeight: "medium" }),
        nav: css({ display: "flex", alignItems: "flex-start" }),
        button_previous: cx(
          button({ variant: "outline" }),
          css({
            pos: "absolute",
            w: "7",
            h: "7",
            p: "0",
            left: "1",
            _disabled: { opacity: "0.5" },
          })
        ),
        button_next: cx(
          button({ variant: "outline" }),
          css({
            pos: "absolute",
            w: "7",
            h: "7",
            p: "0",
            right: "1",
            _disabled: { opacity: "0.5" },
          })
        ),
        month_grid: css({ w: "full", borderCollapse: "collapse", spaceY: "1" }),
        weekdays: css({ display: "flex" }),
        weekday: css({
          w: "9",
          color: "muted.fg",
          fontSize: "0.8rem",
          fontWeight: "normal",
          rounded: "md",
        }),
        week: css({ display: "flex", w: "full", mt: "2" }),
        day: cx(
          css({
            pos: "relative",
            w: "9",
            h: "9",
            p: "0",
            textAlign: "center",
            textStyle: "sm",
            _focusWithin: { pos: "relative", zIndex: "20" },
            _first: { roundedStart: "md" },
            _last: { roundedEnd: "md" },
          })
        ),
        day_button: cx(
          button({ variant: "ghost" }),
          css({
            w: "9",
            h: "9",
          })
        ),
        outside: css({
          color: "muted.fg",
          "&[data-selected] button": {
            bg: "accent/50",
            color: "muted.fg",
            _hover: { bg: "accent/50", color: "muted.fg" },
          },
        }),
        today: css({ "& button": { bg: "accent", color: "accent.fg" } }),
        selected: css({
          "&:not(.range-middle) button": {
            bg: "primary",
            color: "primary.fg",
            rounded: "md",
            _hover: { bg: "primary", color: "primary.fg" },
            _focus: { bg: "primary", color: "primary.fg" },
          },
          "&[data-outside] button": {
            bg: "primary/10",
            color: "muted.fg",
            _hover: { bg: "primary/10", color: "muted.fg" },
          },
        }),
        hidden: css({ visibility: "hidden" }),
        range_start: css({ bg: "accent", roundedStart: "md" }),
        range_end: css({ bg: "accent", roundedEnd: "md" }),
        range_middle: cx(
          "range-middle",
          css({
            bg: "accent",
            color: "accent.fg",
            "&[data-outside]": { bg: "accent/50" },
          })
        ),
        disabled: css({ color: "muted.fg", opacity: "0.5" }),
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === "left" ? LuChevronLeft : LuChevronRight;
          return <Icon className={css({ w: "4", h: "4" })} />;
        },
        CaptionLabel: (props) => (
          <CaptionLabel showSwitcher={showSwitcher} setView={setView} {...props} />
        ),
        MonthGrid: (props) => (
          <MonthGrid view={view} setView={setView} minYear={minYear} maxYear={maxYear} {...props} />
        ),
      }}
      {...props}
    />
  );
};

function CaptionLabel({
  showSwitcher,
  setView,
  children,
  ...props
}: {
  showSwitcher: boolean;
  setView: React.Dispatch<React.SetStateAction<View>>;
} & React.ComponentProps<"span">) {
  if (!showSwitcher) return <span {...props}>{children}</span>;

  return (
    <Button
      variant="ghost"
      className={css({ h: "7" })}
      onClick={() => {
        setView((prev) => (prev === "day" ? "year" : "day"));
      }}
    >
      {children}
    </Button>
  );
}

function MonthGrid({
  view,
  setView,
  minYear,
  maxYear,
  ...props
}: {
  view: View;
  setView: React.Dispatch<React.SetStateAction<View>>;
  minYear?: number;
  maxYear?: number;
} & React.ComponentProps<"table">) {
  const { goToMonth, months } = useDayPicker();

  const startYear = minYear || new Date().getFullYear() - 10;
  const endYear = maxYear || new Date().getFullYear() + 10;

  const yearGridRef = React.useRef<HTMLTableElement>(null);
  const currentYearRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (view === "year" && yearGridRef.current && currentYearRef.current) {
      if (yearGridRef.current.scrollHeight <= yearGridRef.current.clientHeight) return;
      currentYearRef.current.scrollIntoView({
        block: "center",
      });
    }
  }, [view]);

  if (view === "day") return <table {...props} />;

  if (view === "month") {
    const currentMonth = months[0].date.getMonth();

    return (
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          minW: "15.75rem",
        })}
      >
        {Array.from({ length: 12 }, (_, i) => {
          const month = new Date(0, i);
          return (
            <Button
              key={`month-${i}`}
              variant="ghost"
              className={css({ bg: currentMonth === i ? "accent" : "transparent" })}
              onClick={() => {
                goToMonth(new Date(months[0].date.getFullYear(), i));
                setView("day");
              }}
            >
              {month.toLocaleDateString("default", { month: "short" })}
            </Button>
          );
        })}
      </div>
    );
  }

  if (view === "year") {
    const currentYear = months[0].date.getFullYear();

    return (
      <div
        ref={yearGridRef}
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          minW: "15.75rem",
          maxH: "56",
          overflowY: "auto",
        })}
      >
        {Array.from({ length: endYear - startYear }, (_, i) => {
          const year = startYear + i;
          return (
            <Button
              key={year}
              ref={year === currentYear ? currentYearRef : undefined}
              variant="ghost"
              className={css({ bg: year === currentYear ? "accent" : "transparent", p: "0" })}
              onClick={() => {
                goToMonth(new Date(year, months[0].date.getMonth()));
                setView("month");
              }}
            >
              {year}
            </Button>
          );
        })}
      </div>
    );
  }
}
Calendar.displayName = "Calendar";

export { Calendar };
