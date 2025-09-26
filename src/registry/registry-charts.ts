import type { Registry } from "./schema";

export const charts: Registry["items"] = [
  // Area Charts
  {
    name: "chart-area-axes",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-axes.tsx",
        type: "registry:block",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-default",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-default.tsx",
        type: "registry:block",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-gradient",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-gradient.tsx",
        type: "registry:block",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-icons",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-icons.tsx",
        type: "registry:block",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-interactive",
    type: "registry:block",
    registryDependencies: ["card", "chart", "select"],
    files: [
      {
        path: "charts/chart-area-interactive.tsx",
        type: "registry:component",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-legend",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-legend.tsx",
        type: "registry:block",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-linear",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-linear.tsx",
        type: "registry:block",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-stacked-expand",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-stacked-expand.tsx",
        type: "registry:block",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-stacked",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-stacked.tsx",
        type: "registry:block",
      },
    ],
    categories: ["charts", "charts-area"],
  },
  {
    name: "chart-area-step",
    type: "registry:block",
    registryDependencies: ["card", "chart"],
    files: [
      {
        path: "charts/chart-area-step.tsx",
        type: "registry:block",
      },
    ],
    categories: ["charts", "charts-area"],
  },
];
