import { styled } from "styled-system/jsx";
import { Slider } from "@/registry/default/ui/slider";

export default function SliderDemo() {
  return (
    <styled.div
      css={{
        display: "flex",
        w: "full",
        maxW: "sm",
        flexDir: "column",
        flexWrap: "wrap",
        gap: "6",
        md: { flexDir: "row" },
      }}
    >
      <Slider defaultValue={[50]} max={100} step={1} />
      <Slider defaultValue={[25, 50]} max={100} step={1} />
      <Slider defaultValue={[10, 20]} max={100} step={10} />
    </styled.div>
  );
}
