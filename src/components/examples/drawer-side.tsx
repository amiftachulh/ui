import { css } from "styled-system/css";
import { flex, grid } from "styled-system/patterns";
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
    <div className={flex({ align: "center", gap: "4" })}>
      {SIDE.map((side) => (
        <Drawer key={side}>
          <DrawerTrigger asChild>
            <Button variant="outline">{side}</Button>
          </DrawerTrigger>
          <DrawerContent side={side}>
            <DrawerHeader>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you're done.
              </DrawerDescription>
            </DrawerHeader>
            <div className={grid({ gap: "4", py: "4" })}>
              <div
                className={grid({
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  alignItems: "center",
                  gap: "4",
                })}
              >
                <Label htmlFor="name" textAlign="right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Ahmad Miftachul Hidayat"
                  className={css({ gridColumn: "span 3 / span 3" })}
                />
              </div>
              <div
                className={grid({
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  alignItems: "center",
                  gap: "4",
                })}
              >
                <Label htmlFor="username" textAlign="right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="amiftachulh"
                  className={css({ gridColumn: "span 3 / span 3" })}
                />
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button type="submit">Save changes</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
