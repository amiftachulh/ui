"use client";

import * as React from "react";
import { LuCheck, LuChevronsUpDown } from "react-icons/lu";
import { PopoverProps } from "@radix-ui/react-popover";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { useMutationObserver } from "@/hooks/use-mutation-observer";
import { Button } from "@/registry/default/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/default/ui/hover-card";
import { Label } from "@/registry/default/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import { Model, ModelType } from "../data/models";

interface ModelSelectorProps extends PopoverProps {
  types: readonly ModelType[];
  models: Model[];
}

export function ModelSelector({ models, types, ...props }: ModelSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedModel, setSelectedModel] = React.useState<Model>(models[0]);
  const [peekedModel, setPeekedModel] = React.useState<Model>(models[0]);

  return (
    <styled.div css={{ display: "grid", gap: "3" }}>
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <Label htmlFor="model">Model</Label>
        </HoverCardTrigger>
        <HoverCardContent align="start" css={{ w: "260px", textStyle: "sm" }} side="left">
          The model which will generate the completion. Some models are suitable for natural
          language tasks, others specialize in code. Learn more.
        </HoverCardContent>
      </HoverCard>
      <Popover open={open} onOpenChange={setOpen} {...props}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a model"
            css={{ w: "full", justifyContent: "space-between" }}
          >
            {selectedModel ? selectedModel.name : "Select a model..."}
            <LuChevronsUpDown className={css({ color: "muted.fg" })} />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" css={{ w: "250px", p: "0" }}>
          <HoverCard>
            <HoverCardContent side="left" align="start" forceMount css={{ minH: "280px" }}>
              <styled.div css={{ display: "grid", gap: "2" }}>
                <styled.h4 css={{ lineHeight: "none", fontWeight: "medium" }}>
                  {peekedModel.name}
                </styled.h4>
                <styled.div css={{ color: "muted.fg", textStyle: "sm" }}>
                  {peekedModel.description}
                </styled.div>
                {peekedModel.strengths ? (
                  <styled.div css={{ mt: "4", display: "grid", gap: "2" }}>
                    <styled.h5 css={{ textStyle: "sm", lineHeight: "none", fontWeight: "medium" }}>
                      Strengths
                    </styled.h5>
                    <styled.ul css={{ color: "muted.fg", textStyle: "sm" }}>
                      {peekedModel.strengths}
                    </styled.ul>
                  </styled.div>
                ) : null}
              </styled.div>
            </HoverCardContent>
            <Command loop>
              <CommandList css={{ h: "var(--cmdk-list-height)", maxH: "400px" }}>
                <CommandInput placeholder="Search Models..." />
                <CommandEmpty>No Models found.</CommandEmpty>
                <HoverCardTrigger />
                {types.map((type) => (
                  <CommandGroup key={type} heading={type}>
                    {models
                      .filter((model) => model.type === type)
                      .map((model) => (
                        <ModelItem
                          key={model.id}
                          model={model}
                          isSelected={selectedModel?.id === model.id}
                          onPeek={(model) => setPeekedModel(model)}
                          onSelect={() => {
                            setSelectedModel(model);
                            setOpen(false);
                          }}
                        />
                      ))}
                  </CommandGroup>
                ))}
              </CommandList>
            </Command>
          </HoverCard>
        </PopoverContent>
      </Popover>
    </styled.div>
  );
}

interface ModelItemProps {
  model: Model;
  isSelected: boolean;
  onSelect: () => void;
  onPeek: (model: Model) => void;
}

function ModelItem({ model, isSelected, onSelect, onPeek }: ModelItemProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  useMutationObserver(ref, (mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-selected" &&
        ref.current?.getAttribute("aria-selected") === "true"
      ) {
        onPeek(model);
      }
    });
  });

  return (
    <CommandItem
      key={model.id}
      onSelect={onSelect}
      ref={ref}
      css={{
        "&[data-selected=true]": {
          bg: "primary",
          color: "primary.fg",
        },
      }}
    >
      {model.name}
      <LuCheck
        data-selected={isSelected}
        className={css({
          ml: "auto",
          opacity: "0",
          "&[data-selected=true]": {
            opacity: "1",
          },
        })}
      />
    </CommandItem>
  );
}
