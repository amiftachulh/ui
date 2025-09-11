import Bun from "@/components/icons/bun";
import Npm from "@/components/icons/npm";
import Pnpm from "@/components/icons/pnpm";
import Yarn from "@/components/icons/yarn";

interface PackageManager {
  name: string;
  command: string;
  runner: string;
  icon: React.ReactNode;
}

export const packageManagers: PackageManager[] = [
  {
    name: "npm",
    command: "npm install",
    runner: "npx",
    icon: <Npm />,
  },
  {
    name: "Yarn",
    command: "yarn add",
    runner: "yarn",
    icon: <Yarn />,
  },
  {
    name: "pnpm",
    command: "pnpm add",
    runner: "pnpm dlx",
    icon: <Pnpm />,
  },
  {
    name: "Bun",
    command: "bun add",
    runner: "bunx --bun",
    icon: <Bun />,
  },
];
