import { LuLoaderCircle } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css, cx } from "styled-system/css";
import { button, type ButtonVariantProps } from "styled-system/recipes";

type ButtonProps = React.ComponentProps<"button"> &
  ButtonVariantProps & {
    loading?: boolean;
    asChild?: boolean;
  };

const Button = ({
  variant,
  size,
  className,
  children,
  asChild,
  loading,
  disabled,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cx(button({ variant, size }), className)}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <>
          <span className={css({ display: "contents", visibility: "hidden" })} aria-hidden>
            {children}
          </span>
          <div className={css({ srOnly: true })}>{children}</div>
          <span
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pos: "absolute",
              inset: 0,
            })}
          >
            <LuLoaderCircle className={css({ animation: "spin" })} />
          </span>
        </>
      ) : (
        children
      )}
    </Component>
  );
};
Button.displayName = "Button";

export { Button };
