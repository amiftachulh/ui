export async function generateStaticParams() {
  return [
    { name: "sidebar-demo" },
    { name: "sidebar-header" },
    { name: "sidebar-footer" },
    { name: "sidebar-group" },
    { name: "sidebar-group-collapsible" },
    { name: "sidebar-group-action" },
    { name: "sidebar-menu" },
    { name: "sidebar-menu-action" },
    { name: "sidebar-menu-sub" },
    { name: "sidebar-menu-collapsible" },
    { name: "sidebar-menu-badge" },
    { name: "sidebar-controlled" },
    { name: "sidebar-07" },
  ];
}

export const dynamicParams = false;

export default async function View({ params }: { params: Promise<{ name: string }> }) {
  const name = (await params).name;
  const mod = await import(`@/blocks/${name}.tsx`);
  const Component = mod.default;

  return <Component />;
}
