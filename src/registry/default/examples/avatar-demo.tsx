import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/amiftachulh.png" alt="@amiftachulh" />
      <AvatarFallback>A</AvatarFallback>
    </Avatar>
  );
}
