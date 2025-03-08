import { styled } from "styled-system/jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarGroup() {
  return (
    <styled.div
      css={{
        display: "flex",
        spaceX: "-2",
        _hover: { spaceX: "1" },
        "& > [data-slot=avatar]": {
          transition: "all",
          focusRing: "2",
          focusRingColor: "bg",
        },
      }}
    >
      <Avatar>
        <AvatarImage src="https://github.com/amiftachulh.png" alt="@amiftachulh" />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/segunadebayo.png" alt="@segunadebayo" />
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
    </styled.div>
  );
}
