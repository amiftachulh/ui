"use client";

import * as React from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { Slot } from "@radix-ui/react-slot";
import { styled } from "styled-system/jsx";
import { Label as LabelBase } from "@/components/ui/label";

const Root = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const Field = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const Item = ({ css, ...props }: React.ComponentProps<typeof styled.div>) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <styled.div css={{ spaceY: "2", ...css }} {...props} />
    </FormItemContext.Provider>
  );
};
Item.displayName = "FormItem";

const Label = ({ css, ...props }: React.ComponentProps<typeof LabelBase>) => {
  const { error, formItemId } = useFormField();

  return (
    <LabelBase
      css={{
        color: error ? "red.500" : "inherit",
        ...css,
      }}
      htmlFor={formItemId}
      {...props}
    />
  );
};
Label.displayName = "FormLabel";

const Control = (props: React.ComponentProps<typeof Slot>) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
};
Control.displayName = "FormControl";

const Description = ({ css, ...props }: React.ComponentProps<typeof styled.p>) => {
  const { formDescriptionId } = useFormField();

  return (
    <styled.p
      id={formDescriptionId}
      css={{
        textStyle: "sm",
        color: "muted.fg",
        ...css,
      }}
      {...props}
    />
  );
};
Description.displayName = "FormDescription";

const Message = ({ css, children, ...props }: React.ComponentProps<typeof styled.p>) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <styled.p
      id={formMessageId}
      css={{
        color: "red.500",
        textStyle: "sm",
        fontWeight: "medium",
        ...css,
      }}
      {...props}
    >
      {body}
    </styled.p>
  );
};
Message.displayName = "FormMessage";

const Form = {
  Root,
  Field,
  Item,
  Label,
  Control,
  Description,
  Message,
};

export { Form };
