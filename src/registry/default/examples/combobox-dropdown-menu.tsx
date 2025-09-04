"use client";

import { Controller, useForm } from "react-hook-form";
import { LuCheck, LuChevronsUpDown } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { toast } from "@/registry/default/hooks/use-toast";
import { Button } from "@/registry/default/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

const formSchema = z.object({
  language: z.string({
    required_error: "Please select a language.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function ComboboxForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = form.handleSubmit((data) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <styled.pre
          css={{ mt: "2", w: "340px", rounded: "md", bg: "slate.950", p: "4", borderWidth: "1px" }}
        >
          <styled.code css={{ color: "white" }}>{JSON.stringify(data, null, 2)}</styled.code>
        </styled.pre>
      ),
    });
  });

  return (
    <styled.form onSubmit={onSubmit} css={{ spaceY: "6" }}>
      <Controller
        control={form.control}
        name="language"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid} css={{ display: "flex", flexDir: "column" }}>
            <FieldLabel>Language</FieldLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FieldControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    css={{
                      w: "200px",
                      justifyContent: "space-between",
                      color: !field.value ? "muted.fg" : undefined,
                    }}
                  >
                    {field.value
                      ? languages.find((language) => language.value === field.value)?.label
                      : "Select language"}
                    <LuChevronsUpDown
                      className={css({
                        ml: "2",
                        w: "4",
                        h: "4",
                        flexShrink: "0",
                        opacity: "0.5",
                      })}
                    />
                  </Button>
                </FieldControl>
              </PopoverTrigger>
              <PopoverContent css={{ w: "200px", p: "0" }}>
                <Command>
                  <CommandInput placeholder="Search language..." />
                  <CommandList>
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          onSelect={() => {
                            form.setValue("language", language.value);
                          }}
                        >
                          {language.label}
                          <LuCheck
                            className={css({
                              ml: "auto",
                              opacity: language.value === field.value ? "1" : "0",
                            })}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <FieldDescription>
              This is the language that will be used in the dashboard.
            </FieldDescription>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </styled.form>
  );
}
