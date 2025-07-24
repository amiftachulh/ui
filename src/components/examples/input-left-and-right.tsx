import { LuEye, LuSearch } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Input } from "@/components/ui/input";

export default function InputLeftAndRight() {
  return (
    <styled.div css={{ w: "full", spaceY: 4 }}>
      {/* Search Input with Left Icon */}
      <styled.div css={{ pos: "relative" }}>
        <Input placeholder="Search" css={{ pl: "10" }} />
        <LuSearch
          className={css({ pos: "absolute", left: "3", top: "50%", transform: "translateY(-50%)" })}
        />
      </styled.div>

      {/* Password Input with Right Icon */}
      <styled.div css={{ pos: "relative" }}>
        <Input type="password" placeholder="Password" css={{ pr: "10" }} />
        <LuEye
          className={css({
            pos: "absolute",
            right: "3",
            top: "50%",
            transform: "translateY(-50%)",
          })}
        />
      </styled.div>

      {/* URL Input with Text on Both Sides */}
      <styled.div css={{ pos: "relative" }}>
        <Input placeholder="Your website" css={{ pl: "16", pr: "14" }} />
        <styled.p
          css={{
            pos: "absolute",
            left: "3",
            top: "50%",
            transform: "translateY(-50%)",
            textStyle: "sm",
          }}
        >
          https://
        </styled.p>
        <styled.p
          css={{
            pos: "absolute",
            right: "3",
            top: "50%",
            transform: "translateY(-50%)",
            textStyle: "sm",
          }}
        >
          .com
        </styled.p>
      </styled.div>
    </styled.div>
  );
}
