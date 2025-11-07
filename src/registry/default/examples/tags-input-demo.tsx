"use client";

import { Field, FieldLabel } from "@/registry/default/ui/field";
import {
  TagsInput,
  TagsInputContainer,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemText,
  TagsInputList,
} from "@/registry/default/ui/tags-input";

export default function TagsInputDemo() {
  return (
    <Field>
      <FieldLabel>Tags</FieldLabel>
      <TagsInput>
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
      </TagsInput>
    </Field>
  );
}
