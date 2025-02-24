import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { avatar } from "styled-system/recipes";

const classes = avatar();

const Root = ({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) => (
  <AvatarPrimitive.Root className={cx(classes.root, className)} {...props} />
);
const StyledRoot = styled(Root);
StyledRoot.displayName = AvatarPrimitive.Root.displayName;

const Image = ({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) => (
  <AvatarPrimitive.Image className={cx(classes.image, className)} {...props} />
);
const StyledImage = styled(Image);
StyledImage.displayName = AvatarPrimitive.Image.displayName;

const Fallback = ({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) => (
  <AvatarPrimitive.Fallback className={cx(classes.fallback, className)} {...props} />
);
const StyledFallback = styled(Fallback);
StyledFallback.displayName = AvatarPrimitive.Fallback.displayName;

const Avatar = {
  Root: StyledRoot,
  Image: StyledImage,
  Fallback: StyledFallback,
};

export { Avatar };
