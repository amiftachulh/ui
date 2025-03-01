import { LuEye, LuSearch } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Input } from "@/components/ui/input";

export default function InputLeftAndRight() {
  return (
    <styled.div spaceY="4">
      {/* Search Input with Left Icon */}
      <styled.div position="relative">
        <LuSearch className={css({ position: "absolute", left: "3", top: "3" })} />
        <Input placeholder="Search" paddingLeft="10" />
      </styled.div>

      {/* Password Input with Right Icon */}
      <styled.div position="relative">
        <Input type="password" placeholder="Password" paddingRight="10" />
        <LuEye className={css({ position: "absolute", right: "3", top: "3" })} />
      </styled.div>

      {/* URL Input with Text on Both Sides */}
      <styled.div position="relative">
        <styled.p position="absolute" left="3" top="2.5" textStyle="sm">
          https://
        </styled.p>
        <Input placeholder="Your website" paddingLeft="16" paddingRight="14" />
        <styled.p position="absolute" right="3" top="2.5" textStyle="sm">
          .com
        </styled.p>
      </styled.div>
    </styled.div>
  );
}
