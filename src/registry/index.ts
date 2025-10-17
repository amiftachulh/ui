import z from "zod";
import { blocks } from "./registry-blocks";
import { charts } from "./registry-charts";
import { examples } from "./registry-examples";
import { hooks } from "./registry-hooks";
import { internal } from "./registry-internal";
import { lib } from "./registry-lib";
import { ui } from "./registry-ui";
import { registryItemSchema, type Registry } from "./schema";

export const registry = {
  name: "nore-ui",
  homepage: "https://template-fe.nore.web.id",
  items: z
    .array(registryItemSchema)
    .parse([...ui, ...blocks, ...charts, ...hooks, ...lib, ...examples, ...internal]),
} satisfies Registry;
