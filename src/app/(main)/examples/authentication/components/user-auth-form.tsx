"use client";

import * as React from "react";
import { SiGithub } from "react-icons/si";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSeparator } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";
import { Spinner } from "@/registry/default/ui/spinner";

export function UserAuthForm({ css: cssProp, ...props }: React.ComponentProps<typeof styled.div>) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <styled.div css={{ display: "grid", gap: "6", ...cssProp }} {...props}>
      <form onSubmit={onSubmit}>
        <FieldGroup>
          <Field>
            <FieldLabel css={{ srOnly: true }} htmlFor="email">
              Email
            </FieldLabel>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </Field>
          <Field>
            <Button disabled={isLoading}>
              {isLoading && <Spinner />}
              Sign In with Email
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldSeparator>Or continue with</FieldSeparator>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? <Spinner /> : <SiGithub className={css({ mr: "2", w: "4", h: "4" })} />} GitHub
      </Button>
    </styled.div>
  );
}
