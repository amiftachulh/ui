import { LuX } from "react-icons/lu";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { visuallyHidden } from "styled-system/patterns";
import { drawer, type DrawerVariant } from "styled-system/recipes";

const classes = drawer();

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = styled(DrawerPrimitive.Trigger);

const DrawerPortal = DrawerPrimitive.Portal;

const Overlay = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Overlay>) => (
  <DrawerPrimitive.Overlay className={cx(classes.overlay, className)} {...props} />
);
const DrawerOverlay = styled(Overlay);

const DrawerClose = styled(DrawerPrimitive.Close);

const Content = ({
  children,
  className,
  side,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content> & Partial<DrawerVariant>) => {
  const classes = drawer({ side });
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content className={cx(classes.content, className)} {...props}>
        {children}
        <DrawerClose pos="absolute" top="4" right="4" cursor="pointer">
          <LuX className={css({ w: "4", h: "4" })} />
          <span className={visuallyHidden()}>Close</span>
        </DrawerClose>
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
};
const DrawerContent = styled(Content);

const Header = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.header, className)} {...props} />
);
const DrawerHeader = styled(Header);

const Title = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) => (
  <DrawerPrimitive.Title className={cx(classes.title, className)} {...props} />
);
const DrawerTitle = styled(Title);

const Description = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) => (
  <DrawerPrimitive.Description className={cx(classes.description, className)} {...props} />
);
const DrawerDescription = styled(Description);

const Footer = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.footer, className)} {...props} />
);
const DrawerFooter = styled(Footer);

export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerContent,
  DrawerFooter,
  DrawerClose,
};
