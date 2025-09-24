import { LuSearch } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Label } from "@/registry/default/ui/label";
import { SidebarInput } from "@/registry/default/ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<typeof styled.form>) {
  return (
    <styled.form {...props}>
      <styled.div css={{ pos: "relative" }}>
        <Label htmlFor="search" css={{ srOnly: true }}>
          Search
        </Label>
        <SidebarInput id="search" placeholder="Type to search..." css={{ h: "8", pl: "7" }} />
        <LuSearch
          className={css({
            pointerEvents: "none",
            pos: "absolute",
            top: "50%",
            left: "2",
            w: "4",
            h: "4",
            transform: "translateY(-50%)",
            opacity: "0.5",
            userSelect: "none",
          })}
        />
      </styled.div>
    </styled.form>
  );
}
