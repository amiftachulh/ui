"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { field } from "styled-system/recipes";
import { createStyleContext } from "@/registry/default/lib/create-style-context";

const { withProvider, withContext } = createStyleContext(field);

interface FieldContextValue {
  id: string;
  invalid?: boolean;
}

const FieldContext = React.createContext({} as FieldContextValue);

interface FieldProps extends React.ComponentProps<"div"> {
  invalid?: boolean;
}

function Root({ children, invalid, ...props }: FieldProps) {
  const id = React.useId();

  return (
    <FieldContext value={{ id, invalid }}>
      <div {...props}>{children}</div>
    </FieldContext>
  );
}
const Field = withProvider(Root, "root");

function useField() {
  const context = React.useContext(FieldContext);
  if (!context) {
    throw new Error("useField must be used within a <Field /> component");
  }

  const { id, invalid } = context;
  return {
    id,
    fieldDescriptionId: `${id}-field-description`,
    fieldErrorId: `${id}-field-error`,
    invalid,
  };
}

function Label({ children, ...props }: React.ComponentProps<"label">) {
  const { id, invalid } = useField();
  return (
    <label htmlFor={id} aria-invalid={invalid} {...props}>
      {children}
    </label>
  );
}
const FieldLabel = withContext(Label, "label");

function Control(props: React.ComponentProps<typeof Slot>) {
  const { id, fieldDescriptionId, invalid } = useField();
  return <Slot id={id} aria-describedby={fieldDescriptionId} aria-invalid={invalid} {...props} />;
}
const FieldControl = withContext(Control, "control");

function Description(props: React.ComponentProps<"p">) {
  const { fieldDescriptionId } = useField();
  return <p id={fieldDescriptionId} {...props} />;
}
const FieldDescription = withContext(Description, "description");

function ErrorBase({ children, ...props }: React.ComponentProps<"p">) {
  const { invalid, fieldErrorId } = useField();

  if (invalid) return null;

  return (
    <p id={fieldErrorId} {...props}>
      {children}
    </p>
  );
}
const FieldError = withContext(ErrorBase, "error");

export { Field, FieldLabel, FieldControl, FieldDescription, FieldError, useField };
