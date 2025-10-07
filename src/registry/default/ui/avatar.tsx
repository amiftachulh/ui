"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { createStyleContext } from "styled-system/jsx";
import { avatar } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(avatar);

const Avatar = withProvider(AvatarPrimitive.Root, "root");
const AvatarImage = withContext(AvatarPrimitive.Image, "image");
const AvatarFallback = withContext(AvatarPrimitive.Fallback, "fallback");

export { Avatar, AvatarFallback, AvatarImage };
