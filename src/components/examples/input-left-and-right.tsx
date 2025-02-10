import { LuEye, LuSearch } from "react-icons/lu";
import { css } from "styled-system/css";
import { stack } from "styled-system/patterns";
import { Input } from "@/components/ui/input";

export default function InputLeftAndRight() {
  return (
    <div className={stack({ gap: "4" })}>
      <div className={css({ pos: "relative" })}>
        <LuSearch className={css({ pos: "absolute", left: "3", top: "3" })} />
        <Input placeholder="Search" className={css({ pl: 10 })} />
      </div>
      <div className={css({ pos: "relative" })}>
        <Input type="password" placeholder="Password" className={css({ pr: 10 })} />
        <LuEye className={css({ pos: "absolute", right: "3", top: "3" })} />
      </div>
      <div className={css({ pos: "relative" })}>
        <p className={css({ pos: "absolute", left: "3", top: "2.5", textStyle: "sm" })}>https://</p>
        <Input placeholder="Your website" className={css({ pl: "16", pr: "14" })} />
        <p className={css({ pos: "absolute", right: "3", top: "2.5", textStyle: "sm" })}>.com</p>
      </div>
    </div>
  );
}
