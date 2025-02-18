import { useMemo } from "react";
import { packageManagers } from "@/config/package-managers";
import CodeBlock from "./code-block";
import PackageTabs from "./package-tabs";

type PackageInstallerProps = {
  name: string;
};

export default function PackageInstaller({ name }: PackageInstallerProps) {
  const items = useMemo(
    () =>
      packageManagers.map((p) => (
        <CodeBlock key={p.name} lang="bash">{`${p.command} ${name}`}</CodeBlock>
      )),
    [name]
  );

  return <PackageTabs items={items} />;
}
