import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cx } from "styled-system/css";
import { avatar } from "styled-system/recipes";

const classes = avatar();

const Avatar = ({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) => (
  <AvatarPrimitive.Root className={cx(classes.root, className)} {...props} />
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = ({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) => (
  <AvatarPrimitive.Image className={cx(classes.image, className)} {...props} />
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = ({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) => (
  <AvatarPrimitive.Fallback className={cx(classes.fallback, className)} {...props} />
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
