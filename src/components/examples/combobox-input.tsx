"use client";

import * as React from "react";
import { LuX } from "react-icons/lu";
import { Command as CommandPrimitive } from "cmdk";
import { css, cx } from "styled-system/css";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";

type Framework = { value: string; label: string };

const FRAMEWORKS: Framework[] = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "wordpress", label: "WordPress" },
  { value: "express.js", label: "Express.js" },
  { value: "nest.js", label: "Nest.js" },
];

export default function FancyMultiSelect() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Framework[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleClear = () => {
    setInputValue("");
    setSelected([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === "Delete" || e.key === "Backspace") && inputValue === "") {
      setSelected((prev) => prev.slice(0, -1)); // Remove last selected
    }
    if (e.key === "Escape") inputRef.current?.blur();
  };

  const selectables = FRAMEWORKS.filter(
    (framework) => !selected.some((s) => s.value === framework.value)
  );

  return (
    <Command onKeyDown={handleKeyDown} className={css({ overflow: "visible", bg: "transparent" })}>
      <div
        className={cx(
          "group",
          css({
            pos: "relative",
            display: "flex",
            rounded: "md",
            borderWidth: "1px",
            borderColor: "input",
            px: "3",
            py: "2",
            textStyle: "sm",
            _focusWithin: {
              focusRing: "2",
              focusRingColor: "ring",
              focusRingOffset: "2",
              focusRingOffsetColor: "bg",
            },
          })
        )}
      >
        <CommandPrimitive.Input
          ref={inputRef}
          value={inputValue}
          onValueChange={setInputValue}
          onBlur={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          placeholder="Select frameworks..."
          className={css({
            ml: "2",
            flex: "1",
            bg: "transparent",
            outline: "none",
            _placeholder: { color: "muted.fg" },
          })}
        />
        <button
          className={css({ pos: "absolute", right: "2", insetBlock: "0" })}
          onClick={handleClear}
        >
          <LuX className={css({ color: "muted.fg" })} />
        </button>
      </div>
      <div className={css({ pos: "relative", mt: "2" })}>
        {selected.length > 0 && (
          <div className={css({ display: "flex", gap: "2", flexWrap: "wrap", mb: "2" })}>
            {selected.map((framework) => (
              <div
                key={framework.value}
                className={css({
                  display: "flex",
                  alignItems: "center",
                  bg: "gray.200",
                  px: "2",
                  py: "1",
                  rounded: "md",
                })}
              >
                {framework.label}
                <button
                  onClick={() => setSelected(selected.filter((s) => s.value !== framework.value))}
                  className={css({ ml: "1", color: "red.500", cursor: "pointer" })}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
        {open && selectables.length > 0 && (
          <div
            className={css({
              pos: "absolute",
              top: "0",
              zIndex: "10",
              w: "full",
              rounded: "md",
              borderWidth: "1px",
              bg: "popover",
              color: "popover.fg",
              shadow: "md",
              outline: "none",
              animateIn: true,
            })}
          >
            <CommandList>
              <CommandGroup className={css({ h: "full", overflow: "auto" })}>
                {selectables.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={() => {
                      setInputValue("");
                      setSelected((prev) => [...prev, framework]);
                    }}
                    className={css({ cursor: "pointer" })}
                  >
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </div>
        )}
      </div>
    </Command>
  );
}
