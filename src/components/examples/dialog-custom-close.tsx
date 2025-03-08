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
      <DialogContent css={{ sm: { maxW: "md" } }}>
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
        </DialogHeader>
        <styled.div css={{ display: "flex", alignItems: "center", spaceX: "2" }}>
          <styled.div css={{ display: "grid", flex: "1", gap: "2" }}>
            <Label htmlFor="link" css={{ srOnly: true }}>
              Link
            </Label>
            <Input id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
          </styled.div>
          <Button type="submit" size="sm" css={{ px: "3" }}>
            <styled.span css={{ srOnly: true }}>Copy</styled.span>
            <LuCopy />
          </Button>
        </styled.div>
        <DialogFooter css={{ sm: { justifyContent: "flex-start" } }}>
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
