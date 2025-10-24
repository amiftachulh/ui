"use client";

import * as React from "react";
import {
  LuArchive,
  LuArrowLeft,
  LuCalendarPlus,
  LuClock,
  LuEllipsis,
  LuFilter,
  LuMailCheck,
  LuTag,
  LuTrash2,
} from "react-icons/lu";
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export function ButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal");

  return (
    <ButtonGroup>
      <ButtonGroup css={{ display: "none", sm: { display: "flex" } }}>
        <Button variant="outline" size="icon-sm" aria-label="Go Back">
          <LuArrowLeft />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Archive
        </Button>
        <Button variant="outline" size="sm">
          Report
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Snooze
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon-sm" aria-label="More Options">
              <LuEllipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" css={{ w: "48" }}>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <LuMailCheck />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LuArchive />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <LuClock />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LuCalendarPlus />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LuFilter />
                Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <LuTag />
                  Label As...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup value={label} onValueChange={setLabel}>
                    <DropdownMenuRadioItem value="personal">Personal</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">Work</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">Other</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="danger">
                <LuTrash2 />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  );
}
