"use client";

import * as React from "react";
import { LuX } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { createStyleContext } from "styled-system/jsx";
import { tagsInput } from "styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(tagsInput);

/* -----------------------------------------------------------------------------
 * Context
 * -------------------------------------------------------------------------- */

interface TagsInputContextValue {
  inputRef: React.RefObject<HTMLInputElement | null>;
  value: string[];
  setValue: (value: string[]) => void;
  disabled: boolean;
  removeTag: (index: number) => void;
}

const TagsInputContext = React.createContext<TagsInputContextValue | null>(null);

function useTagsInput() {
  const context = React.useContext(TagsInputContext);
  if (!context) {
    throw new Error("useTagsInput must be used within a TagsInput");
  }
  return context;
}

/* -----------------------------------------------------------------------------
 * Root
 * -------------------------------------------------------------------------- */

function Root({
  value: valueProp,
  defaultValue = [],
  onValueChange,
  disabled = false,
  children,
}: {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);

  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp! : internalValue;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const setValue = React.useCallback(
    (next: string[]) => {
      if (!isControlled) {
        setInternalValue(next);
      }
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );

  const removeTag = React.useCallback(
    (index: number) => setValue(value.filter((_, i) => i !== index)),
    [value, setValue]
  );

  return (
    <TagsInputContext value={{ value, setValue, inputRef, disabled, removeTag }}>
      {children}
    </TagsInputContext>
  );
}

const TagsInput = withRootProvider(Root);

/* -----------------------------------------------------------------------------
 * Container
 * -------------------------------------------------------------------------- */

function Container(props: React.ComponentProps<"div">) {
  const { inputRef, disabled } = useTagsInput();

  function handleContainerClick() {
    inputRef.current?.focus();
  }

  return (
    <div
      data-slot="tags-input"
      onClick={handleContainerClick}
      aria-disabled={disabled ? true : undefined}
      {...props}
    />
  );
}

const TagsInputContainer = withContext(Container, "container");

/* -----------------------------------------------------------------------------
 * List
 * -------------------------------------------------------------------------- */

function List({
  children,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  children: (value: string[]) => React.ReactNode;
}) {
  const { value } = useTagsInput();

  return (
    <div data-slot="tags-input-list" role="list" {...props}>
      {children(value)}
    </div>
  );
}

const TagsInputList = withContext(List, "list");

/* -----------------------------------------------------------------------------
 * Item
 * -------------------------------------------------------------------------- */

interface TagsInputItemContextValue {
  index: number;
  disabled?: boolean;
}

const TagsInputItemContext = React.createContext<TagsInputItemContextValue | null>(null);

function useTagsInputItem() {
  const context = React.useContext(TagsInputItemContext);
  if (!context) {
    throw new Error("useTagsInputItem must be used within a TagsInputItem");
  }
  return context;
}

function Item({
  index,
  children,
  disabled,
  ...props
}: React.ComponentProps<"div"> & { index: number; disabled?: boolean }) {
  return (
    <TagsInputItemContext value={{ index, disabled }}>
      <div data-slot="tags-input-item" role="listitem" {...props}>
        {children}
      </div>
    </TagsInputItemContext>
  );
}

const TagsInputItem = withContext(Item, "item");

/* -----------------------------------------------------------------------------
 * Item Text
 * -------------------------------------------------------------------------- */

const TagsInputItemText = withContext("span", "itemText", {
  defaultProps: {
    "data-slot": "tags-input-item-text",
  } as React.ComponentProps<"span">,
});

/* -----------------------------------------------------------------------------
 * Item Delete Trigger
 * -------------------------------------------------------------------------- */

function ItemDeleteTrigger({
  disabled,
  children,
  asChild,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const { removeTag, disabled: rootDisabled } = useTagsInput();
  const { index, disabled: itemDisabled } = useTagsInputItem();

  const Component = asChild ? Slot : "button";
  const isDisabled = disabled || itemDisabled || rootDisabled;

  function handleClick() {
    if (isDisabled) return;
    removeTag(index);
  }

  return (
    <Component
      data-slot="tags-input-item-delete-trigger"
      disabled={isDisabled}
      onClick={handleClick}
      {...props}
    >
      {children ?? <LuX />}
    </Component>
  );
}

const TagsInputItemDeleteTrigger = withContext(ItemDeleteTrigger, "itemDeleteTrigger");

/* -----------------------------------------------------------------------------
 * Input
 * -------------------------------------------------------------------------- */

function Input({ placeholder = "Add tags...", disabled, ...props }: React.ComponentProps<"input">) {
  const [inputValue, setInputValue] = React.useState("");
  const { inputRef, value, setValue, disabled: rootDisabled } = useTagsInput();

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();

        const trimmed = inputValue.trim();
        if (trimmed) {
          if (!value.includes(trimmed) && setValue) {
            setValue([...value, trimmed]);
          }
          setInputValue("");
        }
      } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
        setValue?.(value.slice(0, -1));
      }
    },
    [inputValue, setValue, value]
  );

  return (
    <input
      ref={inputRef}
      data-slot="tags-input-input"
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      disabled={disabled || rootDisabled}
      {...props}
    />
  );
}

const TagsInputInput = withContext(Input, "input");

/* -----------------------------------------------------------------------------
 * Clear Trigger
 * -------------------------------------------------------------------------- */

function ClearTrigger({
  asChild,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
}) {
  const { setValue } = useTagsInput();

  const Component = asChild ? Slot : "button";

  return (
    <Component
      type="button"
      onClick={() => setValue([])}
      data-slot="tags-input-clear-trigger"
      {...props}
    />
  );
}

const TagsInputClearTrigger = withContext(ClearTrigger, "clearTrigger");

/* -----------------------------------------------------------------------------
 * Exports
 * -------------------------------------------------------------------------- */

export {
  TagsInput,
  TagsInputContainer,
  TagsInputList,
  TagsInputItem,
  TagsInputItemText,
  TagsInputItemDeleteTrigger,
  TagsInputInput,
  TagsInputClearTrigger,
};
