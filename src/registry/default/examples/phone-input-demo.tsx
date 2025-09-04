"use client";

import { Controller, useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { toast } from "@/registry/default/hooks/use-toast";
import { Button } from "@/registry/default/ui/button";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/field";
import { PhoneInput } from "@/registry/default/ui/phone-input";

const formSchema = z.object({
  phone: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number" }),
});

export default function PhoneInputDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
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
    <styled.form
      onSubmit={onSubmit}
      css={{ display: "flex", flexDir: "column", alignItems: "flex-start", spaceY: "8" }}
    >
      <Controller
        control={form.control}
        name="phone"
        render={({ field, fieldState }) => (
          <Field
            invalid={fieldState.invalid}
            css={{ display: "flex", flexDir: "column", alignItems: "flex-start" }}
          >
            <FieldLabel css={{ textAlign: "left" }}>Phone Number</FieldLabel>
            <FieldControl css={{ w: "full" }}>
              <PhoneInput placeholder="Enter a phone number" {...field} />
            </FieldControl>
            <FieldDescription css={{ textAlign: "left" }}>Enter a phone number</FieldDescription>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />
      <pre>
        <styled.code css={{ color: "muted.fg" }}>
          {JSON.stringify(form.watch("phone"), null, 2)}
        </styled.code>
      </pre>
      <Button type="submit">Submit</Button>
    </styled.form>
  );
}
