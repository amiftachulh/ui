import { center } from "styled-system/patterns";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className={center({ py: "8" })}>
      <Button>Click me</Button>
    </div>
  );
}
