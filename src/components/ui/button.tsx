import { LuLoaderCircle } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { button } from "styled-system/recipes";

interface ButtonProps extends React.ComponentProps<"button"> {
  loading?: boolean;
  asChild?: boolean;
}

function Root({ children, asChild, loading, disabled, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component disabled={loading || disabled} {...props}>
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
}
const Button = styled(Root, button);
Button.displayName = "Button";

export { Button };
