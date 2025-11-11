"use client";

import * as React from "react";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { field } from "styled-system/recipes";
import { Label } from "@/registry/default/ui/label";
import { Separator } from "@/registry/default/ui/separator";

const classes = field();

function FieldSet({ className, ...props }: React.ComponentProps<typeof styled.fieldset>) {
  return (
    <styled.fieldset data-slot="field-set" className={cx(classes.set, className)} {...props} />
  );
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<typeof styled.legend> & { variant?: "legend" | "label" }) {
  return (
    <styled.legend
      data-slot="field-legend"
      data-variant={variant}
      className={cx(classes.legend, className)}
      {...props}
    />
  );
}

function FieldGroup({ className, ...props }: React.ComponentProps<typeof styled.div>) {
  return <styled.div data-slot="field-group" className={cx(classes.group, className)} {...props} />;
}

function Field({
  className,
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
      className={cx(classes.root, className)}
      {...props}
    />
  );
}

function FieldContent({ className, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div data-slot="field-content" className={cx(classes.content, className)} {...props} />
  );
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

function FieldTitle({ className, ...props }: React.ComponentProps<typeof styled.div>) {
  return <styled.div data-slot="field-label" className={cx(classes.title, className)} {...props} />;
}

function FieldDescription({ className, ...props }: React.ComponentProps<typeof styled.p>) {
  return (
    <styled.p
      data-slot="field-description"
      className={cx(classes.description, className)}
      {...props}
    />
  );
}

function FieldSeparator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div
      data-slot="field-separator"
      data-content={!!children}
      className={cx(classes.separator, className)}
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
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<typeof styled.div> & {
  errors?: Array<{ message?: string } | undefined>;
}) {
  const content = React.useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];

    if (uniqueErrors.length === 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <styled.ul
        css={{ ml: "4", display: "flex", listStyleType: "disc", flexDir: "column", gap: "1" }}
      >
        {uniqueErrors.map((error, index) => error?.message && <li key={index}>{error.message}</li>)}
      </styled.ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <styled.div
      role="alert"
      data-slot="field-error"
      className={cx(classes.error, className)}
      {...props}
    >
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
