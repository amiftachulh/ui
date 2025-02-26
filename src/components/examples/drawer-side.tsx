import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SIDE = ["top", "bottom", "left", "right"] as const;

export default function DrawerSide() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "4" }}>
      {SIDE.map((side) => (
        <Drawer key={side}>
          <DrawerTrigger asChild>
            <Button variant="outline">{side}</Button>
          </DrawerTrigger>
          <DrawerContent side={side}>
            <DrawerHeader>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DrawerDescription>
            </DrawerHeader>
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
            <DrawerFooter>
              <DrawerClose asChild>
                <Button type="submit">Save changes</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </styled.div>
  );
}
