import { stack } from "styled-system/patterns";
import { Input } from "@/components/ui/input";

export default function InputSizes() {
  return (
    <div className={stack({ gap: "4" })}>
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  );
}
