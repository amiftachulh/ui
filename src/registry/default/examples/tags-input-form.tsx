/* eslint-disable react/no-children-prop */
"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { styled } from "styled-system/jsx";
import * as z from "zod";
import { Button } from "@/registry/default/ui/button";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/registry/default/ui/field";
import {
  TagsInput,
  TagsInputContainer,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemText,
  TagsInputList,
} from "@/registry/default/ui/tags-input";

const formSchema = z.object({
  tags: z
    .array(z.string())
    .min(1, "Please add at least one tag.")
    .max(5, "You can only add up to 5 tags."),
});

export default function TagsInputForm() {
  const form = useForm({
    defaultValues: {
      tags: [] as string[],
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
            <styled.code css={{ color: "white" }}>{JSON.stringify(value, null, 2)}</styled.code>
          </styled.pre>
        ),
      });
    },
  });

  return (
    <styled.form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      css={{ display: "grid", gap: "6" }}
    >
      <form.Field
        name="tags"
        children={(field) => {
          const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field data-invalid={isInvalid} css={{ display: "flex", flexDir: "column" }}>
              <FieldLabel>Topics</FieldLabel>
              <TagsInput
                value={field.state.value}
                onValueChange={(value) => field.handleChange(value)}
              >
                <TagsInputContainer>
                  <TagsInputList>
                    {(value) =>
                      value.map((tag, index) => (
                        <TagsInputItem key={index} index={index}>
                          <TagsInputItemText>{tag}</TagsInputItemText>
                          <TagsInputItemDeleteTrigger />
                        </TagsInputItem>
                      ))
                    }
                  </TagsInputList>
                  <TagsInputInput placeholder="Add a topic..." />
                </TagsInputContainer>
              </TagsInput>
              <FieldDescription>
                Add topics to help people discover your content. You can add up to 5 tags.
              </FieldDescription>
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          );
        }}
      />
      <Button type="submit">Submit</Button>
    </styled.form>
  );
}
