type SideNavItem = {
  title: string;
  href: string;
};

type SideNavGroup = {
  title: string;
  items: SideNavItem[];
};

export const sideNav: SideNavGroup[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Introduction",
        href: "/docs/overview/introduction",
      },
      {
        title: "Getting Started",
        href: "/docs/overview/getting-started",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Accordion",
        href: "/docs/components/accordion",
      },
      {
        title: "Alert",
        href: "/docs/components/alert",
      },
      {
        title: "Avatar",
        href: "/docs/components/avatar",
      },
      {
        title: "Breadcrumb",
        href: "/docs/components/breadcrumb",
      },
      {
        title: "Button",
        href: "/docs/components/button",
      },
      {
        title: "Calendar",
        href: "/docs/components/calendar",
      },
      {
        title: "Checkbox",
        href: "/docs/components/checkbox",
      },
      {
        title: "Chip",
        href: "/docs/components/chip",
      },
      {
        title: "Collapsible",
        href: "/docs/components/collapsible",
      },
      {
        title: "Command",
        href: "/docs/components/command",
      },
      {
        title: "Date Picker",
        href: "/docs/components/date-picker",
      },
      {
        title: "Dialog",
        href: "/docs/components/dialog",
      },
      {
        title: "Drawer",
        href: "/docs/components/drawer",
      },
      {
        title: "Dropdown Menu",
        href: "/docs/components/dropdown-menu",
      },
      {
        title: "Input",
        href: "/docs/components/input",
      },
      {
        title: "Label",
        href: "/docs/components/label",
      },
      {
        title: "Popover",
        href: "/docs/components/popover",
      },
      {
        title: "Select",
        href: "/docs/components/select",
      },
      {
        title: "Table",
        href: "/docs/components/table",
      },
      {
        title: "Tabs",
        href: "/docs/components/tabs",
      },
    ],
  },
];
