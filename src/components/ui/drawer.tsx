import { LuX } from "react-icons/lu";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { css, cx } from "styled-system/css";
import { visuallyHidden } from "styled-system/patterns";
import { drawer, type DrawerVariantProps } from "styled-system/recipes";

const classes = drawer();

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) => (
  <DrawerPrimitive.Overlay className={cx(classes.overlay, className)} {...props} />
);

const DrawerClose = DrawerPrimitive.Close;

const DrawerContent = ({
  children,
  className,
  side,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content> & DrawerVariantProps) => {
  const classes = drawer({ side });
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content className={cx(classes.content, className)} {...props}>
        {children}
        <DrawerClose className={css({ pos: "absolute", top: "4", right: "4", cursor: "pointer" })}>
          <LuX className={css({ w: "4", h: "4" })} />
          <span className={visuallyHidden()}>Close</span>
        </DrawerClose>
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
};

const DrawerHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.header, className)} {...props} />
);

const DrawerTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) => (
  <DrawerPrimitive.Title className={cx(classes.title, className)} {...props} />
);

const DrawerDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) => (
  <DrawerPrimitive.Description className={cx(classes.description, className)} {...props} />
);

const DrawerFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.footer, className)} {...props} />
);

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
