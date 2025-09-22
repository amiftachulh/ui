import { LuSearch } from "react-icons/lu";
import { css } from "styled-system/css";
import { Label } from "@/registry/default/ui/label";
import { SidebarGroup, SidebarGroupContent, SidebarInput } from "@/registry/default/ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup css={{ py: "0" }}>
        <SidebarGroupContent css={{ pos: "relative" }}>
          <Label htmlFor="search" css={{ srOnly: true }}>
            Search
          </Label>
          <SidebarInput id="search" placeholder="Search the docs..." css={{ pl: "8" }} />
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
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
