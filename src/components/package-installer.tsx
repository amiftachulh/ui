import { useMemo } from "react";
import { packageManagers } from "@/config/package-managers";
import CodeBlock from "./code-block";
import PackageTabs from "./package-tabs";

type PackageInstallerProps = {
  pkgName: string;
};

export default function PackageInstaller({ pkgName }: PackageInstallerProps) {
  const items = useMemo(
    () =>
      packageManagers.map((p) => (
        <CodeBlock key={p.name} lang="bash">{`${p.command} ${pkgName}`}</CodeBlock>
      )),
    [pkgName]
  );

  return <PackageTabs items={items} />;
}
