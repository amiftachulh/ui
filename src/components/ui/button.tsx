import { LuLoaderCircle } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { flex, visuallyHidden } from "styled-system/patterns";
import { button } from "styled-system/recipes";

const Root = ({
  loading,
  children,
  asChild,
  disabled,
  ...props
}: React.ComponentProps<"button"> & {
  loading?: boolean;
  asChild?: boolean;
}) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component disabled={loading || disabled} {...props}>
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
const Button = styled(Root, button);

export { Button };
