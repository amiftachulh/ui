"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldHelper, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

// Define schema with Zod
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().default(false),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Playground() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    // Simulate API call
    console.log("Login attempt with:", data);

    // Add your authentication logic here
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Login successful!");
  };

  return (
    <styled.form
      onSubmit={handleSubmit(onSubmit)}
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "4",
        width: "full",
        maxWidth: "md",
      }}
    >
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="email"
              type="email"
              css={{
                width: "full",
                p: "2",
                border: "1px solid",
                borderColor: "gray.200",
                borderRadius: "md",
                _focus: {
                  outline: "none",
                  ring: "2px",
                  ringColor: "blue.500",
                },
              }}
              placeholder="you@example.com"
            />
          )}
        />
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
        <FieldHelper>Enter the email address associated with your account</FieldHelper>
      </Field>

      <Field>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="password"
              type="password"
              css={{
                width: "full",
                p: "2",
                border: "1px solid",
                borderColor: "gray.200",
                borderRadius: "md",
                _focus: {
                  outline: "none",
                  ring: "2px",
                  ringColor: "blue.500",
                },
              }}
            />
          )}
        />
        {errors.password && <FieldError>{errors.password.message}</FieldError>}
        <FieldHelper>Must be at least 8 characters</FieldHelper>
      </Field>

      <styled.div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <styled.label css={{ display: "flex", alignItems: "center" }}>
          <Controller
            name="rememberMe"
            control={control}
            render={({ field: { onChange, value, ref } }) => (
              <styled.input
                type="checkbox"
                onChange={onChange}
                checked={value}
                ref={ref}
                css={{ mr: "2" }}
              />
            )}
          />
          <styled.span>Remember me</styled.span>
        </styled.label>
        <styled.a
          href="#"
          css={{
            color: "blue.600",
            _hover: { textDecoration: "underline" },
          }}
        >
          Forgot password?
        </styled.a>
      </styled.div>

      <Button type="submit" loading={isSubmitting}>
        Login
      </Button>
    </styled.form>
  );
}
