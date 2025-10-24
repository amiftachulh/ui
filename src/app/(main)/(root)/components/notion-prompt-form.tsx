"use client";

import { useMemo, useState } from "react";
import {
  TbApps,
  TbArrowUp,
  TbAt,
  TbBook,
  TbCircleDashedPlus,
  TbPaperclip,
  TbPlus,
  TbWorld,
  TbX,
} from "react-icons/tb";
import { styled } from "styled-system/jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";
import { Badge } from "@/registry/default/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Field, FieldLabel } from "@/registry/default/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/registry/default/ui/input-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import { Switch } from "@/registry/default/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/default/ui/tooltip";

const SAMPLE_DATA = {
  mentionable: [
    {
      type: "page",
      title: "Meeting Notes",
      image: "📝",
    },
    {
      type: "page",
      title: "Project Dashboard",
      image: "📊",
    },
    {
      type: "page",
      title: "Ideas & Brainstorming",
      image: "💡",
    },
    {
      type: "page",
      title: "Calendar & Events",
      image: "📅",
    },
    {
      type: "page",
      title: "Documentation",
      image: "📚",
    },
    {
      type: "page",
      title: "Goals & Objectives",
      image: "🎯",
    },
    {
      type: "page",
      title: "Budget Planning",
      image: "💰",
    },
    {
      type: "page",
      title: "Team Directory",
      image: "👥",
    },
    {
      type: "page",
      title: "Technical Specs",
      image: "🔧",
    },
    {
      type: "page",
      title: "Analytics Report",
      image: "📈",
    },
    {
      type: "user",
      title: "shadcn",
      image: "https://github.com/shadcn.png",
      workspace: "Workspace",
    },
    {
      type: "user",
      title: "maxleiter",
      image: "https://github.com/maxleiter.png",
      workspace: "Workspace",
    },
    {
      type: "user",
      title: "evilrabbit",
      image: "https://github.com/evilrabbit.png",
      workspace: "Workspace",
    },
  ],
  models: [
    {
      name: "Auto",
    },
    {
      name: "Agent Mode",
      badge: "Beta",
    },
    {
      name: "Plan Mode",
    },
  ],
};

function MentionableIcon({ item }: { item: (typeof SAMPLE_DATA.mentionable)[0] }) {
  return item.type === "page" ? (
    <styled.span
      css={{ display: "flex", w: "4", h: "4", alignItems: "center", justifyContent: "center" }}
    >
      {item.image}
    </styled.span>
  ) : (
    <Avatar css={{ w: "4", h: "4" }}>
      <AvatarImage src={item.image} />
      <AvatarFallback>{item.title[0]}</AvatarFallback>
    </Avatar>
  );
}

export function NotionPromptForm() {
  const [mentions, setMentions] = useState<string[]>([]);
  const [mentionPopoverOpen, setMentionPopoverOpen] = useState(false);
  const [modelPopoverOpen, setModelPopoverOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<(typeof SAMPLE_DATA.models)[0]>(
    SAMPLE_DATA.models[0]
  );
  const [scopeMenuOpen, setScopeMenuOpen] = useState(false);

  const grouped = useMemo(() => {
    return SAMPLE_DATA.mentionable.reduce(
      (acc, item) => {
        const isAvailable = !mentions.includes(item.title);

        if (isAvailable) {
          if (!acc[item.type]) {
            acc[item.type] = [];
          }
          acc[item.type].push(item);
        }
        return acc;
      },
      {} as Record<string, typeof SAMPLE_DATA.mentionable>
    );
  }, [mentions]);

  const hasMentions = mentions.length > 0;

  return (
    <styled.form>
      <Field>
        <FieldLabel htmlFor="notion-prompt" css={{ srOnly: true }}>
          Prompt
        </FieldLabel>
        <InputGroup css={{ rounded: "xl" }}>
          <InputGroupTextarea id="notion-prompt" placeholder="Ask, search, or make anything..." />
          <InputGroupAddon align="block-start">
            <Popover open={mentionPopoverOpen} onOpenChange={setMentionPopoverOpen}>
              <Tooltip>
                <TooltipTrigger asChild onFocusCapture={(e) => e.stopPropagation()}>
                  <PopoverTrigger asChild>
                    <InputGroupButton
                      variant="outline"
                      size={!hasMentions ? "sm" : "icon-sm"}
                      css={{ rounded: "full", transition: "transform" }}
                    >
                      <TbAt /> {!hasMentions && "Add context"}
                    </InputGroupButton>
                  </PopoverTrigger>
                </TooltipTrigger>
                <TooltipContent>Mention a person, page, or date</TooltipContent>
              </Tooltip>
              <PopoverContent css={{ p: "0" }} align="start">
                <Command>
                  <CommandInput placeholder="Search pages..." />
                  <CommandList>
                    <CommandEmpty>No pages found</CommandEmpty>
                    {Object.entries(grouped).map(([type, items]) => (
                      <CommandGroup key={type} heading={type === "page" ? "Pages" : "Users"}>
                        {items.map((item) => (
                          <CommandItem
                            key={item.title}
                            value={item.title}
                            onSelect={(currentValue) => {
                              setMentions((prev) => [...prev, currentValue]);
                              setMentionPopoverOpen(false);
                            }}
                          >
                            <MentionableIcon item={item} />
                            {item.title}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ))}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <styled.div
              css={{
                overflowY: "auto",
                display: "flex",
                gap: "1",
                m: "-1.5",
                p: "1.5",
                _scrollbar: {
                  display: "none",
                },
              }}
            >
              {mentions.map((mention) => {
                const item = SAMPLE_DATA.mentionable.find((item) => item.title === mention);

                if (!item) {
                  return null;
                }

                return (
                  <InputGroupButton
                    key={mention}
                    size="sm"
                    variant="secondary"
                    css={{ rounded: "full", pl: "2!" }}
                    onClick={() => {
                      setMentions((prev) => prev.filter((m) => m !== mention));
                    }}
                  >
                    <MentionableIcon item={item} />
                    {item.title}
                    <TbX />
                  </InputGroupButton>
                );
              })}
            </styled.div>
          </InputGroupAddon>
          <InputGroupAddon align="block-end" css={{ gap: "1" }}>
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton size="icon-sm" css={{ rounded: "full" }} aria-label="Attach file">
                  <TbPaperclip />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>Attach file</TooltipContent>
            </Tooltip>
            <DropdownMenu open={modelPopoverOpen} onOpenChange={setModelPopoverOpen}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <InputGroupButton size="sm" css={{ rounded: "full" }}>
                      {selectedModel.name}
                    </InputGroupButton>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>Select AI model</TooltipContent>
              </Tooltip>
              <DropdownMenuContent side="top" align="start">
                <DropdownMenuGroup css={{ w: "10.5rem" }}>
                  <DropdownMenuLabel css={{ color: "muted.fg", textStyle: "xs" }}>
                    Select Agent Mode
                  </DropdownMenuLabel>
                  {SAMPLE_DATA.models.map((model) => (
                    <DropdownMenuCheckboxItem
                      key={model.name}
                      checked={model.name === selectedModel.name}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedModel(model);
                        }
                      }}
                      css={{
                        pl: "2",
                        "& > span:first-child": {
                          right: "2",
                          left: "auto",
                        },
                      }}
                    >
                      {model.name}
                      {model.badge && (
                        <Badge
                          variant="secondary"
                          css={{
                            bg: "blue.100",
                            h: "5",
                            px: "1",
                            color: "blue.800",
                            textStyle: "xs",
                            rounded: "sm",
                            _dark: {
                              bg: "blue.900",
                              color: "blue.100",
                            },
                          }}
                        >
                          {model.badge}
                        </Badge>
                      )}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu open={scopeMenuOpen} onOpenChange={setScopeMenuOpen}>
              <DropdownMenuTrigger asChild>
                <InputGroupButton size="sm" css={{ rounded: "full" }}>
                  <TbWorld /> All Sources
                </InputGroupButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
                    <label htmlFor="web-search">
                      <TbWorld /> Web Search{" "}
                      <Switch id="web-search" css={{ ml: "auto" }} defaultChecked />
                    </label>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
                    <label htmlFor="apps">
                      <TbApps /> Apps and Integrations
                      <Switch id="apps" css={{ ml: "auto" }} defaultChecked />
                    </label>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TbCircleDashedPlus /> All Sources I can access
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Avatar css={{ w: "4", h: "4" }}>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      shadcn
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent css={{ w: "72", p: "0" }}>
                      <Command>
                        <CommandInput placeholder="Find or use knowledge in..." autoFocus />
                        <CommandList>
                          <CommandEmpty>No knowledge found</CommandEmpty>
                          <CommandGroup>
                            {SAMPLE_DATA.mentionable
                              .filter((item) => item.type === "user")
                              .map((user) => (
                                <CommandItem
                                  key={user.title}
                                  value={user.title}
                                  onSelect={() => {
                                    // Handle user selection here
                                    console.log("Selected user:", user.title);
                                  }}
                                >
                                  <Avatar css={{ w: "4", h: "4" }}>
                                    <AvatarImage src={user.image} />
                                    <AvatarFallback>{user.title[0]}</AvatarFallback>
                                  </Avatar>
                                  {user.title}{" "}
                                  <styled.span css={{ color: "muted.fg" }}>
                                    - {user.workspace}
                                  </styled.span>
                                </CommandItem>
                              ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <TbBook /> Help Center
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <TbPlus /> Connect Apps
                  </DropdownMenuItem>
                  <DropdownMenuLabel css={{ color: "muted.fg", textStyle: "xs" }}>
                    We&apos;ll only search in the sources selected here.
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <InputGroupButton
              aria-label="Send"
              variant="primary"
              size="icon-sm"
              css={{ ml: "auto", rounded: "full" }}
            >
              <TbArrowUp />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </styled.form>
  );
}
