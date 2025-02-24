import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DrawerDemo() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Edit profile</Drawer.Title>
          <Drawer.Description>
            Make changes to your profile here. Click save when you&apos;re done.
          </Drawer.Description>
        </Drawer.Header>
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
        <Drawer.Footer>
          <Drawer.Close asChild>
            <Button type="submit">Save changes</Button>
          </Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  );
}
