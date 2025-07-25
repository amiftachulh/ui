"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldControl, FieldError, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function RadioGroupForm() {
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
    <styled.form onSubmit={onSubmit} css={{ w: "2/3", spaceY: "6" }}>
      <Controller
        control={form.control}
        name="type"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid} css={{ spaceY: "3" }}>
            <FieldLabel>Notify me about...</FieldLabel>
            <FieldControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                css={{ display: "flex", flexDir: "column", spaceY: "1" }}
              >
                <Field
                  invalid={fieldState.invalid}
                  css={{ display: "flex", alignItems: "center", gap: "3", spaceY: "0" }}
                >
                  <FieldControl>
                    <RadioGroupItem value="all" />
                  </FieldControl>
                  <FieldLabel css={{ fontWeight: "normal" }}>All new messages</FieldLabel>
                </Field>
                <Field
                  invalid={fieldState.invalid}
                  css={{ display: "flex", alignItems: "center", gap: "3", spaceY: "0" }}
                >
                  <FieldControl>
                    <RadioGroupItem value="mentions" />
                  </FieldControl>
                  <FieldLabel css={{ fontWeight: "normal" }}>
                    Direct messages and mentions
                  </FieldLabel>
                </Field>
                <Field
                  invalid={fieldState.invalid}
                  css={{ display: "flex", alignItems: "center", gap: "3", spaceY: "0" }}
                >
                  <FieldControl>
                    <RadioGroupItem value="none" />
                  </FieldControl>
                  <FieldLabel css={{ fontWeight: "normal" }}>Nothing</FieldLabel>
                </Field>
              </RadioGroup>
            </FieldControl>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </styled.form>
  );
}
