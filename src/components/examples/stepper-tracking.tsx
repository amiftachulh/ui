"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { defineStepper } from "@/components/ui/stepper";

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
  },
  {
    id: "step-4",
    title: "Step 4",
  },
  {
    id: "step-5",
    title: "Step 5",
  },
  {
    id: "step-6",
    title: "Step 6",
  }
);

export default function StepperVerticalFollow() {
  const [tracking, setTracking] = React.useState(false);

  return (
    <styled.div css={{ display: "flex", w: "full", flexDir: "column", gap: "8" }}>
      <RadioGroup
        value={tracking.toString()}
        onValueChange={(value) => setTracking(value === "true")}
      >
        <styled.div css={{ display: "flex", alignItems: "center", columnGap: "2" }}>
          <RadioGroupItem value="true" id="tracking" />
          <Label htmlFor="tracking">Tracking</Label>
        </styled.div>
        <styled.div css={{ display: "flex", alignItems: "center", columnGap: "2" }}>
          <RadioGroupItem value="false" id="no-tracking" />
          <Label htmlFor="no-tracking">No Tracking</Label>
        </styled.div>
      </RadioGroup>
      <StepperProvider variant="vertical" tracking={tracking} css={{ spaceY: "4" }}>
        {({ methods }) => (
          <React.Fragment>
            <StepperNavigation>
              {methods.all.map((step) => (
                <StepperStep key={step.id} of={step.id} onClick={() => methods.goTo(step.id)}>
                  <StepperTitle>{step.title}</StepperTitle>
                  {methods.when(step.id, () => (
                    <StepperPanel css={{ spaceY: "4" }}>
                      <styled.div
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
                      </styled.div>
                      <StepperControls>
                        {!methods.isLast && (
                          <Button
                            variant="secondary"
                            onClick={methods.prev}
                            disabled={methods.isFirst}
                          >
                            Previous
                          </Button>
                        )}
                        <Button onClick={methods.isLast ? methods.reset : methods.next}>
                          {methods.isLast ? "Reset" : "Next"}
                        </Button>
                      </StepperControls>
                    </StepperPanel>
                  ))}
                </StepperStep>
              ))}
            </StepperNavigation>
          </React.Fragment>
        )}
      </StepperProvider>
    </styled.div>
  );
}
