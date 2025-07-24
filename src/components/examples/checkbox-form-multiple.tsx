"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { toast } from "@/hooks/use-toast";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

const formSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function CheckboxFormMultiple() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: ["recents", "home"],
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
    <styled.form onSubmit={onSubmit} css={{ spaceY: "8" }}>
      <Controller
        control={form.control}
        name="items"
        render={({ field, fieldState }) => (
          <Field invalid={fieldState.invalid}>
            <styled.div css={{ mb: "4" }}>
              <FieldLabel css={{ textStyle: "md" }}>Sidebar</FieldLabel>
              <FieldDescription>
                Select the items you want to display in the sidebar.
              </FieldDescription>
            </styled.div>
            {items.map((item) => (
              <styled.div
                key={item.id}
                css={{
                  display: "flex!",
                  flexDir: "row!",
                  alignItems: "center",
                  gap: "2",
                }}
              >
                <FieldControl>
                  <Checkbox
                    checked={field.value?.includes(item.id)}
                    onCheckedChange={(checked) => {
                      return checked
                        ? field.onChange([...field.value, item.id])
                        : field.onChange(field.value?.filter((value: string) => value !== item.id));
                    }}
                  />
                </FieldControl>
                <FieldLabel css={{ fontWeight: "normal" }}>{item.label}</FieldLabel>
              </styled.div>
            ))}
            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </styled.form>
  );
}
