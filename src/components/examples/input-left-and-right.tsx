import { LuEye, LuSearch } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Input } from "@/components/ui/input";

export default function InputLeftAndRight() {
  return (
    <styled.div w="full" spaceY="4">
      {/* Search Input with Left Icon */}
      <styled.div pos="relative">
        <Input placeholder="Search" pl="10" />
        <LuSearch className={css({ pos: "absolute", left: "3", top: "3" })} />
      </styled.div>

      {/* Password Input with Right Icon */}
      <styled.div pos="relative">
        <Input type="password" placeholder="Password" pr="10" />
        <LuEye className={css({ pos: "absolute", right: "3", top: "3" })} />
      </styled.div>

      {/* URL Input with Text on Both Sides */}
      <styled.div pos="relative">
        <Input placeholder="Your website" pl="16" pr="14" />
        <styled.p pos="absolute" left="3" top="2.5" textStyle="sm">
          https://
        </styled.p>
        <styled.p pos="absolute" right="3" top="2.5" textStyle="sm">
          .com
        </styled.p>
      </styled.div>
    </styled.div>
  );
}
