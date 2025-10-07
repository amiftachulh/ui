"use client";

import {
  LuCheck,
  LuChevronDown,
  LuCopy,
  LuShare,
  LuTrash,
  LuTriangleAlert,
  LuUserRoundX,
  LuVolumeOff,
} from "react-icons/lu";
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function ButtonGroupDropdown() {
  return (
    <ButtonGroup>
      <Button variant="outline">Follow</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" css={{ pl: "2!" }}>
            <LuChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <LuVolumeOff />
              Mute Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LuCheck />
              Mark as Read
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LuTriangleAlert />
              Report Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LuUserRoundX />
              Block User
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LuShare />
              Share Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LuCopy />
              Copy Conversation
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="danger">
              <LuTrash />
              Delete Conversation
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}
