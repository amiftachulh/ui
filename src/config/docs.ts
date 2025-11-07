interface MainNavItem {
  title: string;
  href: string;
}

interface SidebarNavItem {
  title: string;
  items: SidebarNavItem[];
  label?: string;
  href?: string;
}

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Docs",
      href: "/docs/overview/introduction",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Charts",
      href: "/charts/area",
    },
    // {
    //   title: "Themes",
    //   href: "/themes",
    // },
    // {
    //   title: "Colors",
    //   href: "/colors",
    // },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/overview/introduction",
          items: [],
        },
        {
          title: "Getting Started",
          href: "/docs/overview/getting-started",
          items: [],
        },
        {
          title: "Forms",
          href: "/docs/overview/forms",
          items: [],
        },
        // {
        //   title: "components.json",
        //   href: "/docs/components-json",
        //   items: [],
        // },
        // {
        //   title: "Theming",
        //   href: "/docs/theming",
        //   items: [],
        // },
        // {
        //   title: "Dark mode",
        //   href: "/docs/dark-mode",
        //   items: [],
        // },
        // {
        //   title: "CLI",
        //   href: "/docs/cli",
        //   items: [],
        // },
        // {
        //   title: "Monorepo",
        //   href: "/docs/monorepo",
        //   items: [],
        // },
        // {
        //   title: "Tailwind v4",
        //   href: "/docs/tailwind-v4",
        //   items: [],
        //   label: "New",
        // },
        // {
        //   title: "Next.js 15 + React 19",
        //   href: "/docs/react-19",
        //   items: [],
        // },
        // {
        //   title: "Typography",
        //   href: "/docs/components/typography",
        //   items: [],
        // },
        // {
        //   title: "Open in v0",
        //   href: "/docs/v0",
        //   items: [],
        // },
        // {
        //   title: "Blocks",
        //   href: "/docs/blocks",
        //   items: [],
        // },
        // {
        //   title: "Figma",
        //   href: "/docs/figma",
        //   items: [],
        // },
        // {
        //   title: "Changelog",
        //   href: "/docs/changelog",
        //   items: [],
        // },
      ],
    },
    // {
    //   title: "Installation",
    //   items: [
    //     {
    //       title: "Next.js",
    //       href: "/docs/installation/next",
    //       items: [],
    //     },
    //     {
    //       title: "Vite",
    //       href: "/docs/installation/vite",
    //       items: [],
    //     },
    //     {
    //       title: "Laravel",
    //       href: "/docs/installation/laravel",
    //       items: [],
    //     },
    //     {
    //       title: "React Router",
    //       href: "/docs/installation/react-router",
    //       items: [],
    //       label: "New",
    //     },
    //     {
    //       title: "Remix",
    //       href: "/docs/installation/remix",
    //       items: [],
    //     },
    //     {
    //       title: "Astro",
    //       href: "/docs/installation/astro",
    //       items: [],
    //     },
    //     {
    //       title: "Tanstack Start",
    //       href: "/docs/installation/tanstack",
    //       items: [],
    //       label: "New",
    //     },
    //     {
    //       title: "Manual",
    //       href: "/docs/installation/manual",
    //       items: [],
    //     },
    //   ],
    // },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion",
          items: [],
        },
        {
          title: "Alert",
          href: "/docs/components/alert",
          items: [],
        },
        {
          title: "Alert Dialog",
          href: "/docs/components/alert-dialog",
          items: [],
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar",
          items: [],
        },
        {
          title: "Badge",
          href: "/docs/components/badge",
          items: [],
        },
        {
          title: "Breadcrumb",
          href: "/docs/components/breadcrumb",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "Button Group",
          href: "/docs/components/button-group",
          items: [],
        },
        {
          title: "Calendar",
          href: "/docs/components/calendar",
          items: [],
        },
        {
          title: "Card",
          href: "/docs/components/card",
          items: [],
        },
        {
          title: "Carousel",
          href: "/docs/components/carousel",
          items: [],
        },
        {
          title: "Chart",
          href: "/docs/components/chart",
          items: [],
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
        },
        {
          title: "Collapsible",
          href: "/docs/components/collapsible",
          items: [],
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox",
          items: [],
        },
        {
          title: "Command",
          href: "/docs/components/command",
          items: [],
        },
        {
          title: "Context Menu",
          href: "/docs/components/context-menu",
          items: [],
        },
        {
          title: "Data Table",
          href: "/docs/components/data-table",
          items: [],
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
          items: [],
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
          items: [],
        },
        {
          title: "Drawer",
          href: "/docs/components/drawer",
          items: [],
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu",
          items: [],
        },
        {
          title: "Empty",
          href: "/docs/components/empty",
          items: [],
        },
        {
          title: "Field",
          href: "/docs/components/field",
          items: [],
        },
        {
          title: "Hover Card",
          href: "/docs/components/hover-card",
          items: [],
        },
        {
          title: "Input",
          href: "/docs/components/input",
          items: [],
        },
        {
          title: "Input Group",
          href: "/docs/components/input-group",
          items: [],
        },
        {
          title: "Input OTP",
          href: "/docs/components/input-otp",
          items: [],
        },
        {
          title: "Item",
          href: "/docs/components/item",
          items: [],
        },
        {
          title: "Kbd",
          href: "/docs/components/kbd",
          items: [],
        },
        {
          title: "Label",
          href: "/docs/components/label",
          items: [],
        },
        {
          title: "Menubar",
          href: "/docs/components/menubar",
          items: [],
        },
        {
          title: "Native Select",
          href: "/docs/components/native-select",
          items: [],
        },
        {
          title: "Navigation Menu",
          href: "/docs/components/navigation-menu",
          items: [],
        },
        {
          title: "Pagination",
          href: "/docs/components/pagination",
          items: [],
        },
        {
          title: "Phone Input",
          href: "/docs/components/phone-input",
          items: [],
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
          items: [],
        },
        {
          title: "Progress",
          href: "/docs/components/progress",
          items: [],
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
          items: [],
        },
        {
          title: "Resizable",
          href: "/docs/components/resizable",
          items: [],
        },
        {
          title: "Scroll Area",
          href: "/docs/components/scroll-area",
          items: [],
        },
        {
          title: "Select",
          href: "/docs/components/select",
          items: [],
        },
        {
          title: "Separator",
          href: "/docs/components/separator",
          items: [],
        },
        {
          title: "Sheet",
          href: "/docs/components/sheet",
          items: [],
        },
        {
          title: "Sidebar",
          href: "/docs/components/sidebar",
          items: [],
        },
        {
          title: "Skeleton",
          href: "/docs/components/skeleton",
          items: [],
        },
        {
          title: "Slider",
          href: "/docs/components/slider",
          items: [],
        },
        {
          title: "Sonner",
          href: "/docs/components/sonner",
          items: [],
        },
        {
          title: "Spinner",
          href: "/docs/components/spinner",
          items: [],
        },
        {
          title: "Stepper",
          href: "/docs/components/stepper",
          items: [],
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          items: [],
        },
        {
          title: "Table",
          href: "/docs/components/table",
          items: [],
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          items: [],
        },
        {
          title: "Tags Input",
          href: "/docs/components/tags-input",
          items: [],
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea",
          items: [],
        },
        {
          title: "Timeline",
          href: "/docs/components/timeline",
          items: [],
        },
        {
          title: "Toast",
          href: "/docs/components/toast",
          items: [],
        },
        {
          title: "Toggle",
          href: "/docs/components/toggle",
          items: [],
        },
        {
          title: "Toggle Group",
          href: "/docs/components/toggle-group",
          items: [],
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
        },
      ],
    },
    {
      title: "Forms",
      items: [
        {
          title: "React Hook Form",
          href: "/docs/forms/react-hook-form",
          items: [],
        },
        {
          title: "TanStack Form",
          href: "/docs/forms/tanstack-form",
          items: [],
        },
      ],
    },
  ],
};
