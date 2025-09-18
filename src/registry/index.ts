import z from "zod";
import { blocks } from "./registry-blocks";
import { examples } from "./registry-examples";
import { hooks } from "./registry-hooks";
import { lib } from "./registry-lib";
import { ui } from "./registry-ui";
import { registryItemSchema, type Registry } from "./schema";

export const registry = {
  name: "nore-ui",
  homepage: "https://template-fe.nore.web.id",
  items: z.array(registryItemSchema).parse([...ui, ...blocks, ...hooks, ...lib, ...examples]),
} satisfies Registry;
