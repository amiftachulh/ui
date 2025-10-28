"use client";

import * as React from "react";
import { LuEllipsis } from "react-icons/lu";
import { toast } from "sonner";
import { styled } from "styled-system/jsx";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/registry/default/ui/alert-dialog";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/default/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

export function PresetActions() {
  const [open, setIsOpen] = React.useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = React.useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon">
            <styled.span css={{ srOnly: true }}>Actions</styled.span>
            <LuEllipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => setIsOpen(true)}>
            Content filter preferences
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => setShowDeleteDialog(true)} css={{ color: "red.600" }}>
            Delete preset
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={open} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Content filter preferences</DialogTitle>
            <DialogDescription>
              The content filter flags text that may violate our content policy. It&apos;s powered
              by our moderation endpoint which is free to use to moderate your OpenAI API traffic.
              Learn more.
            </DialogDescription>
          </DialogHeader>
          <styled.div css={{ py: "6" }}>
            <styled.h4 css={{ color: "muted.fg", textStyle: "sm" }}>Playground Warnings</styled.h4>
            <styled.div
              css={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "4",
                pt: "3",
              }}
            >
              <Switch name="show" id="show" defaultChecked={true} />
              <Label css={{ display: "grid", gap: "1", fontWeight: "normal" }} htmlFor="show">
                <styled.span css={{ fontWeight: "semibold" }}>
                  Show a warning when content is flagged
                </styled.span>
                <styled.span css={{ color: "muted.fg", textStyle: "sm" }}>
                  A warning will be shown when sexual, hateful, violent or self-harm content is
                  detected.
                </styled.span>
              </Label>
            </styled.div>
          </styled.div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This preset will no longer be accessible by you or
              others you&apos;ve shared it with.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant="danger"
              onClick={() => {
                setShowDeleteDialog(false);
                toast.success("This preset has been deleted.");
              }}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
