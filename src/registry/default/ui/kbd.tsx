import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { kbd } from "styled-system/recipes";

const classes = kbd();

function Kbd({ className, ...props }: React.ComponentProps<typeof styled.kbd>) {
  return <styled.kbd data-slot="kbd" className={cx(classes.root, className)} {...props} />;
}

function KbdGroup({ className, ...props }: React.ComponentProps<typeof styled.kbd>) {
  return <styled.kbd data-slot="kbd-group" className={cx(classes.group, className)} {...props} />;
}

export { Kbd, KbdGroup };
