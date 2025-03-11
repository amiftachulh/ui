import dynamic from "next/dynamic";
import path from "path";

export async function generateStaticParams() {
  return [{ id: "sidebar-07" }];
}

export const dynamicParams = false;

const dir = "../../../blocks/";

export default async function View({ params }: { params: Promise<{ name: string }> }) {
  const name = (await params).name;
  const file = path.join(dir, `${name}.tsx`);
  const Component = dynamic(() => import(file));

  return <Component />;
}
