import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SIDE = ["top", "bottom", "left", "right"] as const;

export default function SheetSide() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "4" }}>
      {SIDE.map((side) => (
        <Sheet key={side} side={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </SheetDescription>
            </SheetHeader>
            <styled.div
              css={{ display: "grid", flex: "1", gridAutoRows: "min", gap: "6", px: "4" }}
            >
              <styled.div css={{ display: "grid", gap: "3" }}>
                <Label htmlFor="drawer-demo-name">Name</Label>
                <Input id="drawer-demo-name" defaultValue="Ahmad Miftachul Hidayat" />
              </styled.div>
              <styled.div css={{ display: "grid", gap: "3" }}>
                <Label htmlFor="drawer-demo-username">Username</Label>
                <Input id="drawer-demo-username" defaultValue="amiftachulh" />
              </styled.div>
            </styled.div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </styled.div>
  );
}
