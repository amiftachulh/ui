import { Button } from "@/components/ui/button";

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <label>Label</label>
    </Button>
  );
}
