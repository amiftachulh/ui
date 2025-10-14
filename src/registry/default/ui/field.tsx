"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { field } from "styled-system/recipes";
import { Label } from "@/registry/default/ui/label";
import { Separator } from "./separator";

const classes = field();

function FieldSet(props: React.ComponentProps<typeof styled.fieldset>) {
  return <styled.fieldset data-slot="field-set" className={classes.set} {...props} />;
}

function FieldLegend({
  variant = "legend",
  ...props
}: React.ComponentProps<typeof styled.legend> & { variant?: "legend" | "label" }) {
  return (
    <styled.legend
      data-slot="legend"
      data-variant={variant}
      className={classes.legend}
      {...props}
    />
  );
}

function FieldGroup(props: React.ComponentProps<typeof styled.div>) {
  return <styled.div data-slot="group" className={classes.group} {...props} />;
}

function Field({
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof styled.div> & {
  orientation?: "horizontal" | "vertical" | "responsive";
}) {
  return (
    <styled.div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={classes.root}
      {...props}
    />
  );
}

function FieldContent(props: React.ComponentProps<typeof styled.div>) {
  return <styled.div data-slot="field-content" className={classes.content} {...props} />;
}

function FieldLabel({ css, ...props }: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      css={{
        display: "flex",
        w: "fit",
        gap: "2",
        lineHeight: "snug",
        "[data-slot=field][data-disabled=true] &": {
          opacity: "0.5",
        },
        "&:has(> [data-slot=field])": {
          w: "full",
          flexDir: "column",
          rounded: "md",
          borderWidth: "1px",
        },
        "& > [data-slot=field]": {
          p: "4",
        },
        "&:has([data-state=checked])": {
          bg: "primary/5",
          borderColor: "primary",
          _dark: {
            bg: "primary/10",
          },
        },
        ...css,
      }}
      {...props}
    />
  );
}

function FieldTitle(props: React.ComponentProps<typeof styled.div>) {
  return <styled.div data-slot="field-label" className={classes.title} {...props} />;
}

function FieldDescription(props: React.ComponentProps<typeof styled.p>) {
  return <styled.p data-slot="field-description" className={classes.description} {...props} />;
}

function FieldSeparator({ children, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div
      data-slot="field-separator"
      data-content={!!children}
      className={classes.separator}
      {...props}
    >
      <Separator css={{ pos: "absolute", inset: "0", top: "50%" }} />
      {children && (
        <styled.span
          data-slot="field-separator-content"
          css={{
            bg: "bg",
            color: "muted.fg",
            pos: "relative",
            mx: "auto",
            display: "block",
            w: "fit",
            px: "2",
          }}
        >
          {children}
        </styled.span>
      )}
    </styled.div>
  );
}

function FieldError({
  children,
  errors,
  ...props
}: React.ComponentProps<typeof styled.div> & {
  errors?: Array<{ message?: string }>;
}) {
  const content = React.useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    if (errors?.length === 1) {
      return errors[0]?.message;
    }

    return (
      <styled.ul
        css={{ ml: "4", display: "flex", listStyleType: "disc", flexDir: "column", gap: "1" }}
      >
        {errors.map((error, index) => error?.message && <li key={index}>{error.message}</li>)}
      </styled.ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <styled.div role="alert" data-slot="field-error" className={classes.error} {...props}>
      {content}
    </styled.div>
  );
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
};
