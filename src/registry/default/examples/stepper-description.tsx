"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { defineStepper } from "@/registry/default/ui/stepper";

const {
  StepperProvider,
  StepperControls,
  StepperNavigation,
  StepperPanel,
  StepperStep,
  StepperTitle,
  StepperDescription,
} = defineStepper(
  {
    id: "step-1",
    title: "Step 1",
    description: "This is the first step",
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "This is the second step",
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "This is the third step",
  }
);

export default function StepperDemo() {
  return (
    <StepperProvider variant="horizontal" css={{ spaceY: "4" }}>
      {({ methods }) => (
        <React.Fragment>
          <StepperNavigation>
            {methods.all.map((step) => (
              <StepperStep key={step.id} of={step.id} onClick={() => methods.goTo(step.id)}>
                <StepperTitle>{step.title}</StepperTitle>
                <StepperDescription>{step.description}</StepperDescription>
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
