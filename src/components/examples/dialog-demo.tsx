import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <styled.div css={{ display: "grid", gap: "4", py: "4" }}>
          <styled.div
            css={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              alignItems: "center",
              gap: "4",
            }}
          >
            <Label htmlFor="name" css={{ textAlign: "right" }}>
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Ahmad Miftachul Hidayat"
              css={{ gridColumn: "span 3" }}
            />
          </styled.div>
          <styled.div
            css={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              alignItems: "center",
              gap: "4",
            }}
          >
            <Label htmlFor="username" css={{ textAlign: "right" }}>
              Username
            </Label>
            <Input id="username" defaultValue="amiftachulh" css={{ gridColumn: "span 3" }} />
          </styled.div>
        </styled.div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
