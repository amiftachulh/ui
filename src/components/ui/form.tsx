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
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Label as LabelBase } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
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

function useFormField() {
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
}

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

function Item({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cx(css({ display: "grid", gap: "2" }), className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}
const FormItem = styled(Item);
FormItem.displayName = "FormItem";

function FormLabel({ css, ...props }: React.ComponentProps<typeof LabelBase>) {
  const { error, formItemId } = useFormField();

  return (
    <LabelBase
      data-slot="form-label"
      data-error={!!error}
      htmlFor={formItemId}
      css={{
        "&[data-error=true]": {
          color: "red.500",
        },
        ...css,
      }}
      {...props}
    />
  );
}

function Control(props: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      id={formItemId}
      data-slot="form-control"
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
}
const FormControl = styled(Control);
FormControl.displayName = "FormControl";

function Description({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      data-slot="form-description"
      className={cx(css({ textStyle: "sm", color: "muted.fg" }), className)}
      {...props}
    />
  );
}
const FormDescription = styled(Description);
FormDescription.displayName = "FormDescription";

const Message = ({ className, ...props }: React.ComponentProps<"p">) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      id={formMessageId}
      className={cx(css({ color: "danger", textStyle: "sm", fontWeight: "medium" }), className)}
      {...props}
    >
      {body}
    </p>
  );
};
const FormMessage = styled(Message);
FormMessage.displayName = "FormMessage";

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  useFormField,
};
