"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { styled } from "styled-system/jsx";
import * as z from "zod";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Switch } from "@/registry/default/ui/switch";

const formSchema = z.object({
  twoFactor: z.boolean().refine((val) => val === true, {
    message: "It is highly recommended to enable two-factor authentication.",
  }),
});

export default function FormRhfSwitch() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      twoFactor: false,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <styled.pre
          css={{
            mt: "2",
            overflowX: "auto",
            w: "320px",
            rounded: "md",
            bg: "slate.950",
            p: "4",
            borderWidth: "1px",
          }}
        >
          <code>{JSON.stringify(data, null, 2)}</code>
        </styled.pre>
      ),
    });
  }

  return (
    <Card css={{ w: "full", sm: { maxW: "md" } }}>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
        <CardDescription>Manage your account security preferences.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-switch" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="twoFactor"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                  <FieldContent>
                    <FieldLabel htmlFor="form-rhf-switch-twoFactor">
                      Multi-factor authentication
                    </FieldLabel>
                    <FieldDescription>
                      Enable multi-factor authentication to secure your account.
                    </FieldDescription>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </FieldContent>
                  <Switch
                    id="form-rhf-switch-twoFactor"
                    name={field.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  />
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-switch">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
