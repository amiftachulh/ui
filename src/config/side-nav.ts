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
        title: "Combobox",
        href: "/docs/components/combobox",
      },
      {
        title: "Command",
        href: "/docs/components/command",
      },
      {
        title: "Context Menu",
        href: "/docs/components/context-menu",
      },
      {
        title: "Data Table",
        href: "/docs/components/data-table",
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
        title: "Form",
        href: "/docs/components/form",
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
        title: "Pagination",
        href: "/docs/components/pagination",
      },
      {
        title: "Popover",
        href: "/docs/components/popover",
      },
      {
        title: "Scroll Area",
        href: "/docs/components/scroll-area",
      },
      {
        title: "Select",
        href: "/docs/components/select",
      },
      {
        title: "Separator",
        href: "/docs/components/separator",
      },
      {
        title: "Skeleton",
        href: "/docs/components/skeleton",
      },
      {
        title: "Switch",
        href: "/docs/components/switch",
      },
      {
        title: "Table",
        href: "/docs/components/table",
      },
      {
        title: "Tabs",
        href: "/docs/components/tabs",
      },
      {
        title: "Toast",
        href: "/docs/components/toast",
      },
    ],
  },
];
