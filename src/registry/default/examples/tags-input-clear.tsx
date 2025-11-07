"use client";

import { Button } from "@/registry/default/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/registry/default/ui/field";
import {
  TagsInput,
  TagsInputClearTrigger,
  TagsInputContainer,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemText,
  TagsInputList,
} from "@/registry/default/ui/tags-input";

export default function TagsInputClear() {
  return (
    <TagsInput defaultValue={["React", "Vue", "Svelte"]}>
      <FieldGroup css={{ gap: "4" }}>
        <Field>
          <FieldLabel>Tags</FieldLabel>
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
            <TagsInputInput />
          </TagsInputContainer>
        </Field>
        <Field>
          <TagsInputClearTrigger asChild>
            <Button variant="outline">Clear Tags</Button>
          </TagsInputClearTrigger>
        </Field>
      </FieldGroup>
    </TagsInput>
  );
}
