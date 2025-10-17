"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { LuCheck } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { css } from "styled-system/css";
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
import { Field, FieldError, FieldGroup, FieldLabel } from "@/registry/default/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/default/ui/input-group";
import { Progress } from "@/registry/default/ui/progress";

const passwordRequirements = [
  {
    id: "length",
    label: "At least 8 characters",
    test: (val: string) => val.length >= 8,
  },
  {
    id: "lowercase",
    label: "One lowercase letter",
    test: (val: string) => /[a-z]/.test(val),
  },
  {
    id: "uppercase",
    label: "One uppercase letter",
    test: (val: string) => /[A-Z]/.test(val),
  },
  { id: "number", label: "One number", test: (val: string) => /\d/.test(val) },
  {
    id: "special",
    label: "One special character",
    test: (val: string) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
  },
];

const formSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine((val) => /[a-z]/.test(val), "Password must contain at least one lowercase letter")
    .refine((val) => /[A-Z]/.test(val), "Password must contain at least one uppercase letter")
    .refine((val) => /\d/.test(val), "Password must contain at least one number")
    .refine(
      (val) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
      "Password must contain at least one special character"
    ),
});

export default function FormRhfPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  const password = form.watch("password");

  // Calculate password strength.
  const metRequirements = passwordRequirements.filter((req) => req.test(password || ""));
  const strengthPercentage = (metRequirements.length / passwordRequirements.length) * 100;

  // Determine strength level and color.
  const getStrengthColor = () => {
    if (strengthPercentage === 0) return "bg-neutral-200";
    if (strengthPercentage <= 40) return "bg-red-500";
    if (strengthPercentage <= 80) return "bg-yellow-500";
    return "bg-green-500";
  };

  const allRequirementsMet = metRequirements.length === passwordRequirements.length;

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <styled.pre
          css={{
            mt: "2",
            overflowX: "auto",
            w: "320px",
            rounded: "md",
            bg: "slate.950",
            p: "4",
            borderWidth: "1px",
          }}
        >
          <code>{JSON.stringify(data, null, 2)}</code>
        </styled.pre>
      ),
    });
  }

  return (
    <Card css={{ w: "full", sm: { maxW: "md" } }}>
      <CardHeader css={{ borderBottomWidth: "1px" }}>
        <CardTitle>Create Password</CardTitle>
        <CardDescription>Choose a strong password to secure your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-password" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-password-input">Password</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      id="form-rhf-password-input"
                      type="password"
                      placeholder="Enter your password"
                      aria-invalid={fieldState.invalid}
                      autoComplete="new-password"
                    />
                    <InputGroupAddon align="inline-end">
                      <LuCheck
                        data-active={allRequirementsMet}
                        className={css({
                          color: "muted.fg",
                          "&[data-active=true]": { color: "green.500" },
                        })}
                      />
                    </InputGroupAddon>
                  </InputGroup>

                  {/* Password strength meter. */}
                  <styled.div css={{ spaceY: "2" }}>
                    <Progress value={strengthPercentage} className={getStrengthColor()} />

                    {/* Requirements list. */}
                    <styled.div css={{ spaceY: "1.5" }}>
                      {passwordRequirements.map((requirement) => {
                        const isMet = requirement.test(password || "");
                        return (
                          <styled.div
                            key={requirement.id}
                            css={{
                              display: "flex",
                              alignItems: "center",
                              gap: "2",
                              textStyle: "sm",
                            }}
                          >
                            <LuCheck
                              data-active={isMet}
                              className={css({
                                color: "muted.fg",
                                w: "4",
                                h: "4",
                                "&[data-active=true]": { color: "green.500" },
                              })}
                            />
                            <styled.span
                              css={{
                                color: "muted.fg",
                                "[data-active=true] &": {
                                  color: "fg",
                                },
                              }}
                            >
                              {requirement.label}
                            </styled.span>
                          </styled.div>
                        );
                      })}
                    </styled.div>
                  </styled.div>

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter css={{ borderTopWidth: "1px" }}>
        <Field>
          <Button type="submit" form="form-rhf-password">
            Create Password
          </Button>
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
