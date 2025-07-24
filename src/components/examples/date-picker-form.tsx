"use client";

import { Controller, useForm } from "react-hook-form";
import { LuCalendar } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function DatePickerForm() {
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
    <styled.form onSubmit={onSubmit} css={{ spaceY: "8" }}>
      <Controller
        control={form.control}
        name="dob"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid}>
            <FieldLabel>Date of birth</FieldLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FieldControl>
                  <Button
                    variant="outline"
                    css={{
                      w: "240px",
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
      <Button type="submit">Submit</Button>
    </styled.form>
  );
}
