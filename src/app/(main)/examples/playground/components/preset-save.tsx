import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export function PresetSave() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Save</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save preset</DialogTitle>
          <DialogDescription>
            This will save the current playground state as a preset which you can access later or
            share with others.
          </DialogDescription>
        </DialogHeader>
        <styled.div css={{ display: "grid", gap: "6", py: "4" }}>
          <styled.div css={{ display: "grid", gap: "3" }}>
            <Label htmlFor="name">Name</Label>
            <Input id="name" autoFocus />
          </styled.div>
          <styled.div css={{ display: "grid", gap: "3" }}>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" />
          </styled.div>
        </styled.div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
