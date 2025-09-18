import type { Registry } from "./schema";

export const blocks: Registry["items"] = [
  {
    name: "login-01",
    description: "A simple login form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-01/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-01/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication"],
  },
  {
    name: "login-02",
    description: "A two column login page with a cover image.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-02/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-02/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication"],
  },
  {
    name: "login-03",
    description: "A login page with a muted background color.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-03/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-03/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication"],
  },
  {
    name: "login-04",
    description: "A login page with form and image.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-04/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-04/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication"],
  },
  {
    name: "login-05",
    description: "A simple email-only login page.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-05/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-05/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication"],
  },
  {
    name: "sidebar-07",
    description: "A sidebar that collapses to icons.",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-07.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-controlled",
    description: "",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-controlled.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-demo",
    description: "",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-footer",
    description: "",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-footer.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-group-action",
    description: "",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-group-action.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-group-collapsible",
    description: "",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-group-collapsible.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-group",
    description: "",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-group.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-header",
    description: "",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-header.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu-action",
    description: "",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-menu-action.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu-badge",
    description: "",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-menu-badge.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu-collapsible",
    description: "",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-menu-collapsible.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu-sub",
    description: "",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-menu-sub.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu",
    description: "",
    type: "registry:block",
    registryDependencies: ["sidebar"],
    files: [
      {
        path: "blocks/sidebar-menu.tsx",
        type: "registry:component",
      },
    ],
  },
];
