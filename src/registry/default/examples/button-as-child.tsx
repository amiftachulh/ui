import { Button } from "@/registry/default/ui/button";

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <label>Label</label>
    </Button>
  );
}
