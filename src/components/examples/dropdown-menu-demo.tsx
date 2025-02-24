import {
  LuCirclePlus,
  LuCloud,
  LuCreditCard,
  LuGithub,
  LuKeyboard,
  LuLifeBuoy,
  LuLogOut,
  LuMail,
  LuMessageSquare,
  LuPlus,
  LuSettings,
  LuUser,
  LuUserPlus,
  LuUsers,
} from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content css={{ w: "56" }}>
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <LuUser />
            <span>Profile</span>
            <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <LuCreditCard />
            <span>Billing</span>
            <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <LuSettings />
            <span>Settings</span>
            <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <LuKeyboard />
            <span>Keyboard shortcuts</span>
            <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <LuUsers />
            <span>Team</span>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <LuUserPlus />
              <span>Invite users</span>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>
                  <LuMail />
                  <span>Email</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <LuMessageSquare />
                  <span>Message</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <LuCirclePlus />
                  <span>More...</span>
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Item>
            <LuPlus />
            <span>New Team</span>
            <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <LuGithub />
          <span>GitHub</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <LuLifeBuoy />
          <span>Support</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item disabled>
          <LuCloud />
          <span>API</span>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <LuLogOut />
          <span>Log out</span>
          <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
