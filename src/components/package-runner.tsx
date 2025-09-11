import { useMemo } from "react";
import { packageManagers } from "@/config/package-managers";
import CodeBlock from "./code-block";
import PackageTabs from "./package-tabs";

type PackageRunnerProps = {
  command: string;
};

export default function PackageRunner({ command }: PackageRunnerProps) {
  const items = useMemo(
    () =>
      packageManagers.map((p) => (
        <CodeBlock key={p.name} lang="bash">{`${p.runner} ${command}`}</CodeBlock>
      )),
    [command]
  );

  return <PackageTabs items={items} />;
}
