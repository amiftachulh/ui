import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you&apos;re done.
          </Dialog.Description>
        </Dialog.Header>
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
        <Dialog.Footer>
          <Button type="submit">Save changes</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
