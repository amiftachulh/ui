"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function TextareaForm() {
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
        name="bio"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid}>
            <FieldLabel>Bio</FieldLabel>
            <FieldControl>
              <Textarea
                placeholder="Tell us a little bit about yourself"
                css={{ resize: "none" }}
                {...field}
              />
            </FieldControl>
            <FieldDescription>
              You can <span>@mention</span> other users and organizations.
            </FieldDescription>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </styled.form>
  );
}
