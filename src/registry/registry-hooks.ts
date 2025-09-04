import type { Registry } from "./schema";

export const hooks: Registry["items"] = [
  {
    name: "use-media-query",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-media-query.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-toast",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-toast.ts",
        type: "registry:hook",
      },
    ],
  },
];
