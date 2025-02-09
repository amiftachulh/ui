import { LuX } from "react-icons/lu";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { visuallyHidden } from "styled-system/patterns";
import { dialog } from "styled-system/recipes";

const classes = dialog();

const Dialog = DialogPrimitive.Root;

const DialogTrigger = styled(DialogPrimitive.Trigger);

const DialogPortal = DialogPrimitive.Portal;

const Overlay = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay className={cx(classes.overlay, className)} {...props} />
);
const DialogOverlay = styled(Overlay);

const DialogClose = styled(DialogPrimitive.Close);

const Content = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content className={cx(classes.content, className)} {...props}>
        {children}
        <DialogClose pos="absolute" top="4" right="4" cursor="pointer">
          <LuX className={css({ w: "4", h: "4" })} />
          <span className={visuallyHidden()}>Close</span>
        </DialogClose>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
};
const DialogContent = styled(Content);

const Header = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.header, className)} {...props} />
);
const DialogHeader = styled(Header);

const Title = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title className={cx(classes.title, className)} {...props} />
);
const DialogTitle = styled(Title);

const Description = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) => (
  <DialogPrimitive.Description className={cx(classes.description, className)} {...props} />
);
const DialogDescription = styled(Description);

const Footer = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.footer, className)} {...props} />
);
const DialogFooter = styled(Footer);

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogClose,
};
