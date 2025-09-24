import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { SidebarInput } from "@/registry/default/ui/sidebar";

export function SidebarOptInForm() {
  return (
    <Card css={{ gap: "2", py: "4", shadow: "none" }}>
      <CardHeader css={{ px: "4" }}>
        <CardTitle css={{ textStyle: "sm" }}>Subscribe to our newsletter</CardTitle>
        <CardDescription>Opt-in to receive updates and news about the sidebar.</CardDescription>
      </CardHeader>
      <CardContent css={{ px: "4" }}>
        <form>
          <styled.div css={{ display: "grid", gap: "2.5" }}>
            <SidebarInput type="email" placeholder="Email" />
            <Button
              css={{
                bg: "sidebar.primary",
                color: "sidebar.primary.fg",
                w: "full",
                shadow: "none",
              }}
              size="sm"
            >
              Subscribe
            </Button>
          </styled.div>
        </form>
      </CardContent>
    </Card>
  );
}
