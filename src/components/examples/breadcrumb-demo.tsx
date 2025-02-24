import { css } from "styled-system/css";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

export default function BreadcrumbDemo() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "1",
                cursor: "pointer",
              })}
            >
              <Breadcrumb.Ellipsis className={css({ w: "4", h: "4" })} />
              <span className={css({ srOnly: true })}>Toggle menu</span>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="start">
              <DropdownMenu.Item>Documentation</DropdownMenu.Item>
              <DropdownMenu.Item>Themes</DropdownMenu.Item>
              <DropdownMenu.Item>GitHub</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}
