import { styled } from "styled-system/jsx";
import { Slider } from "@/registry/default/ui/slider";

export default function SliderVertical() {
  return (
    <styled.div
      css={{ display: "flex", w: "full", alignItems: "center", justifyContent: "center", gap: "6" }}
    >
      <Slider defaultValue={[50]} max={100} step={1} orientation="vertical" />
      <Slider defaultValue={[25]} max={100} step={1} orientation="vertical" />
    </styled.div>
  );
}
