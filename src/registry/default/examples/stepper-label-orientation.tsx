"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { defineStepper } from "@/registry/default/ui/stepper";

type LabelOrientation = "horizontal" | "vertical";

const {
  StepperProvider,
  StepperControls,
  StepperNavigation,
  StepperPanel,
  StepperStep,
  StepperTitle,
} = defineStepper(
  {
    id: "step-1",
    title: "Step 1",
  },
  {
    id: "step-2",
    title: "Step 2",
  },
  {
    id: "step-3",
    title: "Step 3",
  }
);

export default function StepperVariants() {
  const [labelOrientation, setLabelOrientation] = React.useState<LabelOrientation>("horizontal");
  return (
    <styled.div css={{ display: "flex", w: "full", flexDir: "column", gap: "8" }}>
      <RadioGroup
        value={labelOrientation}
        onValueChange={(value) => setLabelOrientation(value as LabelOrientation)}
      >
        <styled.div css={{ display: "flex", alignItems: "center", columnGap: "2" }}>
          <RadioGroupItem value="horizontal" id="horizontal-label" />
          <Label htmlFor="horizontal-label">Horizontal</Label>
        </styled.div>
        <styled.div css={{ display: "flex", alignItems: "center", columnGap: "2" }}>
          <RadioGroupItem value="vertical" id="vertical-label" />
          <Label htmlFor="vertical-label">Vertical</Label>
        </styled.div>
      </RadioGroup>
      <StepperProvider
        variant="horizontal"
        labelOrientation={labelOrientation}
        css={{ spaceY: "4" }}
      >
        {({ methods }) => (
          <React.Fragment>
            <StepperNavigation>
              {methods.all.map((step) => (
                <StepperStep key={step.id} of={step.id} onClick={() => methods.goTo(step.id)}>
                  <StepperTitle>{step.title}</StepperTitle>
                </StepperStep>
              ))}
            </StepperNavigation>
            {methods.switch({
              "step-1": (step) => <Content id={step.id} />,
              "step-2": (step) => <Content id={step.id} />,
              "step-3": (step) => <Content id={step.id} />,
            })}
            <StepperControls>
              {!methods.isLast && (
                <Button variant="secondary" onClick={methods.prev} disabled={methods.isFirst}>
                  Previous
                </Button>
              )}
              <Button onClick={methods.isLast ? methods.reset : methods.next}>
                {methods.isLast ? "Reset" : "Next"}
              </Button>
            </StepperControls>
          </React.Fragment>
        )}
      </StepperProvider>
    </styled.div>
  );
}

const Content = ({ id }: { id: string }) => {
  return (
    <StepperPanel
      css={{
        h: "200px",
        alignContent: "center",
        rounded: "md",
        borderWidth: "1px",
        bg: "slate.50",
        p: "8",
        _dark: { bg: "slate.950" },
      }}
    >
      <styled.p css={{ textStyle: "xl", fontWeight: "normal" }}>Content for {id}</styled.p>
    </StepperPanel>
  );
};
