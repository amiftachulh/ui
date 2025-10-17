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
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/default/ui/field";

const tasks = [
  {
    id: "push",
    label: "Push notifications",
  },
  {
    id: "email",
    label: "Email notifications",
  },
] as const;

const formSchema = z.object({
  responses: z.boolean(),
  tasks: z
    .array(z.string())
    .min(1, "Please select at least one notification type.")
    .refine((value) => value.every((task) => tasks.some((t) => t.id === task)), {
      message: "Invalid notification type selected.",
    }),
});

export default function FormRhfCheckbox() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      responses: true,
      tasks: [],
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
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage your notification preferences.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-checkbox" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="responses"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend variant="label">Responses</FieldLegend>
                  <FieldDescription>
                    Get notified for requests that take time, like research or image generation.
                  </FieldDescription>
                  <FieldGroup data-slot="checkbox-group">
                    <Field orientation="horizontal">
                      <Checkbox
                        id="form-rhf-checkbox-responses"
                        name={field.name}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled
                      />
                      <FieldLabel
                        htmlFor="form-rhf-checkbox-responses"
                        css={{ fontWeight: "normal" }}
                      >
                        Push notifications
                      </FieldLabel>
                    </Field>
                  </FieldGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldSet>
              )}
            />
            <FieldSeparator />
            <Controller
              name="tasks"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend variant="label">Tasks</FieldLegend>
                  <FieldDescription>
                    Get notified when tasks you&apos;ve created have updates.
                  </FieldDescription>
                  <FieldGroup data-slot="checkbox-group">
                    {tasks.map((task) => (
                      <Field
                        key={task.id}
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <Checkbox
                          id={`form-rhf-checkbox-${task.id}`}
                          name={field.name}
                          aria-invalid={fieldState.invalid}
                          checked={field.value.includes(task.id)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...field.value, task.id]
                              : field.value.filter((value) => value !== task.id);
                            field.onChange(newValue);
                          }}
                        />
                        <FieldLabel
                          htmlFor={`form-rhf-checkbox-${task.id}`}
                          css={{ fontWeight: "normal" }}
                        >
                          {task.label}
                        </FieldLabel>
                      </Field>
                    ))}
                  </FieldGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldSet>
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
          <Button type="submit" form="form-rhf-checkbox">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
