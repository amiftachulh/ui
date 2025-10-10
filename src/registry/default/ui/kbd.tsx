import { styled } from "styled-system/jsx";
import { kbd } from "styled-system/recipes";

const classes = kbd();

function Kbd(props: React.ComponentProps<typeof styled.kbd>) {
  return <styled.kbd data-slot="kbd" className={classes.root} {...props} />;
}

function KbdGroup(props: React.ComponentProps<typeof styled.kbd>) {
  return <styled.kbd data-slot="kbd-group" className={classes.group} {...props} />;
}

export { Kbd, KbdGroup };
