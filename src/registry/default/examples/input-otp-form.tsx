"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/registry/default/ui/button";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/registry/default/ui/field";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/default/ui/input-otp";

const formSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function InputOTPForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    toast("You submitted the following values", {
      description: (
        <styled.pre css={{ mt: "2", w: "320px", rounded: "md", bg: "neutral.950", p: "4" }}>
          <styled.code css={{ color: "white" }}>{JSON.stringify(data, null, 2)}</styled.code>
        </styled.pre>
      ),
    });
  });

  return (
    <styled.form onSubmit={onSubmit} css={{ w: "2/3", spaceY: "6" }}>
      <Controller
        control={form.control}
        name="pin"
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>One-Time Password</FieldLabel>
            <InputOTP maxLength={6} {...field}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <FieldDescription>
              Please enter the one-time password sent to your phone.
            </FieldDescription>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </styled.form>
  );
}
