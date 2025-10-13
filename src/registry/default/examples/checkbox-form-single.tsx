"use client";

import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { toast } from "@/registry/default/hooks/use-toast";
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/registry/default/ui/field";

const formSchema = z.object({
  mobile: z.boolean().default(false).optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export default function CheckboxFormSingle() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: true,
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
    <styled.form onSubmit={onSubmit} css={{ spaceY: "6" }}>
      <Controller
        control={form.control}
        name="mobile"
        render={({ field, fieldState }) => (
          <Field
            data-invalid={fieldState.invalid}
            orientation="horizontal"
            css={{ p: "4", borderWidth: "1px", rounded: "md" }}
          >
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            <FieldContent>
              <FieldLabel>Use different settings for my mobile devices</FieldLabel>
              <FieldDescription>
                You can manage your mobile notifications in the{" "}
                <Link href="/examples/forms">mobile settings</Link> page.
              </FieldDescription>
            </FieldContent>
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </styled.form>
  );
}
