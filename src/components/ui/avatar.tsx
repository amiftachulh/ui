"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { avatar } from "styled-system/recipes";
import { createStyleContext } from "@/lib/create-style-context";

const { withProvider, withContext } = createStyleContext(avatar);

const Avatar = withProvider(AvatarPrimitive.Root, "root");
const AvatarImage = withContext(AvatarPrimitive.Image, "image");
const AvatarFallback = withContext(AvatarPrimitive.Fallback, "fallback");

export { Avatar, AvatarFallback, AvatarImage };
