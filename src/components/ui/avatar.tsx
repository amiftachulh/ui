"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { avatar } from "styled-system/recipes";

const classes = avatar();

function Root({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root data-slot="avatar" className={cx(classes.root, className)} {...props} />
  );
}
const Avatar = styled(Root);
Avatar.displayName = AvatarPrimitive.Root.displayName;

function Image({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cx(classes.image, className)}
      {...props}
    />
  );
}
const AvatarImage = styled(Image);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

function Fallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cx(classes.fallback, className)}
      {...props}
    />
  );
}
const AvatarFallback = styled(Fallback);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
