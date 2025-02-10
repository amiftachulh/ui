import { LuLoaderCircle } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css, cx } from "styled-system/css";
import { flex, visuallyHidden } from "styled-system/patterns";
import { button, type ButtonVariantProps } from "styled-system/recipes";

type ButtonProps = React.ComponentProps<"button"> &
  ButtonVariantProps & {
    loading?: boolean;
    asChild?: boolean;
  };

const Button = ({
  className,
  variant,
  size,
  loading,
  children,
  asChild,
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
          <div className={visuallyHidden()}>{children}</div>
          <span className={flex({ align: "center", justify: "center", pos: "absolute", inset: 0 })}>
            <LuLoaderCircle className={css({ animation: "spin" })} />
          </span>
        </>
      ) : (
        children
      )}
    </Component>
  );
};

export { Button };
