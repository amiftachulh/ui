import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/amiftachulh.png" alt="@amiftachulh" />
      <AvatarFallback>A</AvatarFallback>
    </Avatar>
  );
}
