import { Calendar } from "@/registry/default/ui/calendar";
import { SidebarGroup, SidebarGroupContent } from "@/registry/default/ui/sidebar";

export function DatePicker() {
  return (
    <SidebarGroup css={{ px: "0" }}>
      <SidebarGroupContent>
        <Calendar
          css={{
            "& [role=gridcell]": {
              w: "33px",
            },
          }}
        />
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
