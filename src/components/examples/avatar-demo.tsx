import { Avatar } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar.Root>
      <Avatar.Image src="https://github.com/amiftachulh.png" alt="@amiftachulh" />
      <Avatar.Fallback>A</Avatar.Fallback>
    </Avatar.Root>
  );
}
