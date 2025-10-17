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
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Textarea } from "@/registry/default/ui/textarea";

const formSchema = z.object({
  about: z
    .string()
    .min(10, "Please provide at least 10 characters.")
    .max(200, "Please keep it under 200 characters."),
});

export default function FormTanstackTextarea() {
  const form = useForm({
    defaultValues: {
      about: "",
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
        <CardTitle>Personalization</CardTitle>
        <CardDescription>
          Customize your experience by telling us more about yourself.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form-tanstack-textarea"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="about"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="form-tanstack-textarea-about">More about you</FieldLabel>
                    <Textarea
                      id="form-tanstack-textarea-about"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="I'm a software engineer..."
                      css={{ minH: "120px" }}
                    />
                    <FieldDescription>
                      Tell us more about yourself. This will be used to help us personalize your
                      experience.
                    </FieldDescription>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
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
          <Button type="submit" form="form-tanstack-textarea">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
