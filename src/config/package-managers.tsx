import Bun from "@/components/icons/bun";
import Npm from "@/components/icons/npm";
import Pnpm from "@/components/icons/pnpm";
import Yarn from "@/components/icons/yarn";

export const packageManagers = [
  {
    name: "npm",
    command: "npm install",
    icon: <Npm />,
  },
  {
    name: "Yarn",
    command: "yarn add",
    icon: <Yarn />,
  },
  {
    name: "pnpm",
    command: "pnpm add",
    icon: <Pnpm />,
  },
  {
    name: "Bun",
    command: "bun add",
    icon: <Bun />,
  },
];
