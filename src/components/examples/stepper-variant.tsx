"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { defineStepper } from "@/components/ui/stepper";

type Variant = "horizontal" | "vertical" | "circle";

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

export default function StepperVariant() {
  const [variant, setVariant] = React.useState<Variant>("horizontal");

  return (
    <styled.div css={{ display: "flex", w: "full", flexDir: "column", gap: "8" }}>
      <RadioGroup value={variant} onValueChange={(value) => setVariant(value as Variant)}>
        <styled.div css={{ display: "flex", alignItems: "center", columnGap: "2" }}>
          <RadioGroupItem value="horizontal" id="horizontal-variant" />
          <Label htmlFor="horizontal-variant">Horizontal</Label>
        </styled.div>
        <styled.div css={{ display: "flex", alignItems: "center", columnGap: "2" }}>
          <RadioGroupItem value="vertical" id="vertical-variant" />
          <Label htmlFor="vertical-variant">Vertical</Label>
        </styled.div>
        <styled.div css={{ display: "flex", alignItems: "center", columnGap: "2" }}>
          <RadioGroupItem value="circle" id="circle-variant" />
          <Label htmlFor="circle-variant">Circle</Label>
        </styled.div>
      </RadioGroup>
      {variant === "horizontal" && <HorizontalStepper />}
      {variant === "vertical" && <VerticalStepper />}
      {variant === "circle" && <CircleStepper />}
    </styled.div>
  );
}

const HorizontalStepper = () => {
  return (
    <StepperProvider variant="horizontal" css={{ spaceY: "4" }}>
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
  );
};

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

const VerticalStepper = () => {
  return (
    <StepperProvider variant="vertical" css={{ spaceY: "4" }}>
      {({ methods }) => (
        <>
          <StepperNavigation>
            {methods.all.map((step) => (
              <StepperStep key={step.id} of={step.id} onClick={() => methods.goTo(step.id)}>
                <StepperTitle>{step.title}</StepperTitle>
                {methods.when(step.id, () => (
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
                    <styled.p css={{ textStyle: "xl", fontWeight: "normal" }}>
                      Content for {step.id}
                    </styled.p>
                  </StepperPanel>
                ))}
              </StepperStep>
            ))}
          </StepperNavigation>
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
        </>
      )}
    </StepperProvider>
  );
};

const CircleStepper = () => {
  return (
    <StepperProvider variant="circle" css={{ spaceY: "4" }}>
      {({ methods }) => (
        <React.Fragment>
          <StepperNavigation>
            <StepperStep of={methods.current.id}>
              <StepperTitle>{methods.current.title}</StepperTitle>
            </StepperStep>
          </StepperNavigation>
          {methods.when(methods.current.id, () => (
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
              <styled.p css={{ textStyle: "xl", fontWeight: "normal" }}>
                Content for {methods.current.id}
              </styled.p>
            </StepperPanel>
          ))}
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
};
