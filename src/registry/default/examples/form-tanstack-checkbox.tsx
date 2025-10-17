/* eslint-disable react/no-children-prop */
"use client";

import { useForm } from "@tanstack/react-form";
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

export default function FormTanstackCheckbox() {
  const form = useForm({
    defaultValues: {
      responses: true,
      tasks: [] as string[],
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: (
          <styled.pre
            css={{
              mt: "2",
              w: "320px",
              overflowX: "auto",
              rounded: "md",
              bg: "slate.950",
              p: "4",
              borderWidth: "1px",
            }}
          >
            <code>{JSON.stringify(value, null, 2)}</code>
          </styled.pre>
        ),
      });
    },
  });

  return (
    <Card css={{ w: "full", sm: { maxW: "md" } }}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage your notification preferences.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form-tanstack-checkbox"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="responses"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <FieldSet>
                    <FieldLegend variant="label">Responses</FieldLegend>
                    <FieldDescription>
                      Get notified for requests that take time, like research or image generation.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      <Field orientation="horizontal" data-invalid={isInvalid}>
                        <Checkbox
                          id="form-tanstack-checkbox-responses"
                          name={field.name}
                          checked={field.state.value}
                          onCheckedChange={(checked) => field.handleChange(checked === true)}
                          disabled
                        />
                        <FieldLabel
                          htmlFor="form-tanstack-checkbox-responses"
                          css={{ fontWeight: "normal" }}
                        >
                          Push notifications
                        </FieldLabel>
                      </Field>
                    </FieldGroup>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </FieldSet>
                );
              }}
            />
            <FieldSeparator />
            <form.Field
              name="tasks"
              mode="array"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <FieldSet>
                    <FieldLegend variant="label">Tasks</FieldLegend>
                    <FieldDescription>
                      Get notified when tasks you&apos;ve created have updates.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      {tasks.map((task) => (
                        <Field key={task.id} orientation="horizontal" data-invalid={isInvalid}>
                          <Checkbox
                            id={`form-tanstack-checkbox-${task.id}`}
                            name={field.name}
                            aria-invalid={isInvalid}
                            checked={field.state.value.includes(task.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                field.pushValue(task.id);
                              } else {
                                const index = field.state.value.indexOf(task.id);
                                if (index > -1) {
                                  field.removeValue(index);
                                }
                              }
                            }}
                          />
                          <FieldLabel
                            htmlFor={`form-tanstack-checkbox-${task.id}`}
                            css={{ fontWeight: "normal" }}
                          >
                            {task.label}
                          </FieldLabel>
                        </Field>
                      ))}
                    </FieldGroup>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </FieldSet>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-tanstack-checkbox">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
