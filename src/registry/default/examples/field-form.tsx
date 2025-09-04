"use client";

import { Controller, useForm } from "react-hook-form";
import { LuCalendar } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { useToast } from "@/registry/default/hooks/use-toast";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  dob: z.date({ required_error: "A date of birth is required." }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function FieldForm() {
  const { toast } = useToast();

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
    <styled.form onSubmit={onSubmit} css={{ display: "grid", gap: "4" }}>
      <Field invalid={!!form.formState.errors.name}>
        <FieldLabel>Name</FieldLabel>
        <FieldControl>
          <Input placeholder="Enter your name" {...form.register("name")} />
        </FieldControl>
        <FieldError>{form.formState.errors.name?.message}</FieldError>
      </Field>

      <Controller
        control={form.control}
        name="dob"
        render={({ field, fieldState }) => (
          <Field invalid={!!fieldState.invalid}>
            <FieldLabel>Date of birth</FieldLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FieldControl>
                  <Button
                    variant="outline"
                    css={{
                      pl: "3",
                      textAlign: "left",
                      fontWeight: "normal",
                      color: !field.value ? "muted.fg" : undefined,
                    }}
                  >
                    {field.value ? (
                      dayjs(field.value).format("YYYY-MM-DD")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <LuCalendar className={css({ ml: "auto", h: "4", w: "4", opacity: "0.5" })} />
                  </Button>
                </FieldControl>
              </PopoverTrigger>
              <PopoverContent css={{ w: "auto", p: "0" }} align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                  autoFocus
                />
              </PopoverContent>
            </Popover>
            <FieldDescription>Your date of birth is used to calculate your age.</FieldDescription>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />

      <Button>Submit</Button>
    </styled.form>
  );
}
