"use client";

import { useForm } from "react-hook-form";
import { LuCheck, LuChevronsUpDown } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";

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
  language: z.string().min(1, "Please select a language."),
});

export default function ComboboxForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <styled.pre mt="2" w="340px" rounded="md" bg="slate.950" p="4" borderWidth="1px">
          <styled.code color="white">{JSON.stringify(data, null, 2)}</styled.code>
        </styled.pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <styled.form onSubmit={form.handleSubmit(onSubmit)} spaceY="6">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem display="flex" flexDir="column">
              <FormLabel>Language</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      w="200px"
                      justifyContent="space-between"
                      color={!field.value ? "muted.fg" : undefined}
                    >
                      {field.value
                        ? languages.find((lang) => lang.value === field.value)?.label
                        : "Select language"}
                      <LuChevronsUpDown
                        className={css({ ml: "2", w: "4", h: "4", opacity: "0.5" })}
                      />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent w="200px" p="0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandList>
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup>
                        {languages.map((language) => (
                          <CommandItem
                            key={language.value}
                            value={language.label}
                            onSelect={() => form.setValue("language", language.value)}
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
              <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </styled.form>
    </Form>
  );
}
