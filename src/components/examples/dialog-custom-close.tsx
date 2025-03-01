import { LuCopy } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent sm={{ maxW: "md" }}>
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
        </DialogHeader>
        <styled.div display="flex" alignItems="center" spaceX="2">
          <styled.div display="grid" flex="1" gap="2">
            <Label htmlFor="link" srOnly>
              Link
            </Label>
            <Input id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
          </styled.div>
          <Button type="submit" size="sm" px="3">
            <styled.span srOnly>Copy</styled.span>
            <LuCopy />
          </Button>
        </styled.div>
        <DialogFooter sm={{ justifyContent: "flex-start" }}>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
