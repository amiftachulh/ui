"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldControl, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

type FormSchema = z.infer<typeof formSchema>;

export default function SwitchForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      security_emails: true,
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
    <styled.form onSubmit={onSubmit} css={{ w: "full", spaceY: "6" }}>
      <div>
        <styled.h3 css={{ mb: "4", textStyle: "lg", fontWeight: "medium" }}>
          Email Notifications
        </styled.h3>
        <styled.div css={{ spaceY: "4" }}>
          <Controller
            control={form.control}
            name="marketing_emails"
            render={({ field }) => (
              <Field
                css={{
                  display: "flex",
                  flexDir: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  rounded: "lg",
                  borderWidth: "1px",
                  p: "4",
                }}
              >
                <styled.div css={{ spaceY: "0.5" }}>
                  <FieldLabel css={{ textStyle: "md" }}>Marketing emails</FieldLabel>
                  <FieldDescription>
                    Receive emails about new products, features, and more.
                  </FieldDescription>
                </styled.div>
                <FieldControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FieldControl>
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="security_emails"
            render={({ field }) => (
              <Field
                css={{
                  display: "flex",
                  flexDir: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  rounded: "lg",
                  borderWidth: "1px",
                  p: "4",
                }}
              >
                <styled.div css={{ spaceY: "0.5" }}>
                  <FieldLabel css={{ textStyle: "md" }}>Security emails</FieldLabel>
                  <FieldDescription>Receive emails about your account security.</FieldDescription>
                </styled.div>
                <FieldControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled
                    aria-readonly
                  />
                </FieldControl>
              </Field>
            )}
          />
        </styled.div>
      </div>
      <Button type="submit">Submit</Button>
    </styled.form>
  );
}
