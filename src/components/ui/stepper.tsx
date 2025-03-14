"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import * as Stepperize from "@stepperize/react";
import { css, cva, cx, type RecipeVariantProps } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";

//#region Types
type StepperVariant = "horizontal" | "vertical" | "circle";
type StepperLabelOrientation = "horizontal" | "vertical";

type StepperConfig = {
  variant?: StepperVariant;
  labelOrientation?: StepperLabelOrientation;
  tracking?: boolean;
};

type DefineStepperProps<Steps extends Stepperize.Step[]> = Omit<
  Stepperize.StepperReturn<Steps>,
  "Scoped"
> & {
  StepperProvider: (
    props: Omit<Stepperize.ScopedProps<Steps>, "children"> &
      Omit<React.ComponentProps<typeof styled.div>, "children"> &
      StepperConfig & {
        children:
          | React.ReactNode
          | ((props: { methods: Stepperize.Stepper<Steps> }) => React.ReactNode);
      }
  ) => React.ReactElement;
  StepperNavigation: (props: React.ComponentProps<typeof styled.nav>) => React.ReactElement;
  StepperStep: (
    props: React.ComponentProps<typeof styled.button> & {
      of: Stepperize.Get.Id<Steps>;
      icon?: React.ReactNode;
    }
  ) => React.ReactElement;
  StepperTitle: (
    props: React.ComponentProps<typeof styled.h4> & { asChild?: boolean }
  ) => React.ReactElement;
  StepperDescription: (
    props: React.ComponentProps<typeof styled.p> & { asChild?: boolean }
  ) => React.ReactElement;
  StepperPanel: (
    props: React.ComponentProps<typeof styled.div> & { asChild?: boolean }
  ) => React.ReactElement;
  StepperControls: (
    props: React.ComponentProps<typeof styled.div> & { asChild?: boolean }
  ) => React.ReactElement;
};

type CircleStepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
  size?: number;
  strokeWidth?: number;
};

//#endregion Types

//#region Context

const StepperContext = React.createContext<StepperConfig | null>(null);

const useStepperProvider = (): StepperConfig => {
  const context = React.useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider.");
  }
  return context;
};

//#endregion Context

//#region Define Stepper

const defineStepper = <const Steps extends Stepperize.Step[]>(
  ...steps: Steps
): DefineStepperProps<Steps> => {
  const { Scoped, useStepper, ...rest } = Stepperize.defineStepper(...steps);

  const StepperContainer = ({
    children,
    css,
    ...props
  }: Omit<React.ComponentProps<typeof styled.div>, "children"> & {
    children:
      | React.ReactNode
      | ((props: { methods: Stepperize.Stepper<Steps> }) => React.ReactNode);
  }) => {
    const methods = useStepper();

    return (
      <styled.div css={{ w: "full", ...css }} {...props}>
        {typeof children === "function" ? children({ methods }) : children}
      </styled.div>
    );
  };

  return {
    ...rest,
    useStepper,
    StepperProvider: styled(
      ({
        variant = "horizontal",
        labelOrientation = "horizontal",
        tracking = false,
        children,
        className,
        ...props
      }) => {
        return (
          <StepperContext.Provider value={{ variant, labelOrientation, tracking }}>
            <Scoped initialStep={props.initialStep} initialMetadata={props.initialMetadata}>
              <StepperContainer className={className} {...props}>
                {children}
              </StepperContainer>
            </Scoped>
          </StepperContext.Provider>
        );
      }
    ),
    StepperNavigation: styled(
      ({ children, className, "aria-label": ariaLabel = "Stepper Navigation", ...props }) => {
        const { variant } = useStepperProvider();
        return (
          <nav aria-label={ariaLabel} role="tablist" className={className} {...props}>
            <ol className={listVariants({ variant: variant })}>{children}</ol>
          </nav>
        );
      }
    ),
    StepperStep: styled(({ children, className, icon, ...props }) => {
      const { variant, labelOrientation } = useStepperProvider();
      const { current } = useStepper();

      const utils = rest.utils;
      const steps = rest.steps;

      const stepIndex = utils.getIndex(props.of);
      const step = steps[stepIndex];
      const currentIndex = utils.getIndex(current.id);

      const isLast = utils.getLast().id === props.of;
      const isActive = current.id === props.of;

      const dataState = getStepState(currentIndex, stepIndex);
      const childMap = useStepChildren(children);

      const title = childMap.get("title");
      const description = childMap.get("description");
      const panel = childMap.get("panel");

      if (variant === "circle") {
        return (
          <li
            className={cx(
              css({
                display: "flex",
                flexShrink: "0",
                alignItems: "center",
                gap: "4",
                rounded: "md",
                transition: "colors",
              }),
              className
            )}
          >
            <CircleStepIndicator currentStep={stepIndex + 1} totalSteps={steps.length} />
            <div
              className={css({
                display: "flex",
                flexDir: "column",
                alignItems: "flex-start",
                gap: "1",
              })}
            >
              {title}
              {description}
            </div>
          </li>
        );
      }

      return (
        <>
          <li
            className={cx(
              "group peer",
              css({
                pos: "relative",
                display: "flex",
                alignItems: "center",
                gap: "2",
                "&[data-variant=vertical]": { flexDir: "row" },
                "&[data-label-orientation=vertical]": {
                  w: "full",
                  flexDir: "column",
                  justifyContent: "center",
                },
              })
            )}
            data-variant={variant}
            data-label-orientation={labelOrientation}
            data-state={dataState}
            data-disabled={props.disabled}
          >
            <Button
              id={`step-${step.id}`}
              type="button"
              role="tab"
              tabIndex={dataState !== "inactive" ? 0 : -1}
              rounded="full"
              variant={dataState !== "inactive" ? "primary" : "secondary"}
              size="icon"
              aria-controls={`step-panel-${props.of}`}
              aria-current={isActive ? "step" : undefined}
              aria-posinset={stepIndex + 1}
              aria-setsize={steps.length}
              aria-selected={isActive}
              onKeyDown={(e) => onStepKeyDown(e, utils.getNext(props.of), utils.getPrev(props.of))}
              {...props}
            >
              {icon ?? stepIndex + 1}
            </Button>
            {variant === "horizontal" && labelOrientation === "vertical" && (
              <StepperSeparator
                orientation="horizontal"
                labelOrientation={labelOrientation}
                isLast={isLast}
                state={dataState}
                disabled={props.disabled}
              />
            )}
            <div className={css({ display: "flex", flexDir: "column", alignItems: "flex-start" })}>
              {title}
              {description}
            </div>
          </li>

          {variant === "horizontal" && labelOrientation === "horizontal" && (
            <StepperSeparator
              orientation="horizontal"
              isLast={isLast}
              state={dataState}
              disabled={props.disabled}
            />
          )}

          {variant === "vertical" && (
            <div className={css({ display: "flex", gap: "4" })}>
              {!isLast && (
                <div className={css({ display: "flex", justifyContent: "center", ps: "5" })}>
                  <StepperSeparator
                    orientation="vertical"
                    isLast={isLast}
                    state={dataState}
                    disabled={props.disabled}
                  />
                </div>
              )}
              <div className={css({ my: "3", flex: "1", ps: "4" })}>{panel}</div>
            </div>
          )}
        </>
      );
    }),
    StepperTitle,
    StepperDescription,
    StepperPanel: styled(({ children, className, asChild, ...props }) => {
      const Comp = asChild ? Slot : "div";
      const { tracking } = useStepperProvider();

      return (
        <Comp
          className={className}
          ref={(node) => scrollIntoStepperPanel(node, tracking)}
          {...props}
        >
          {children}
        </Comp>
      );
    }),
    StepperControls: styled(({ children, className, asChild, ...props }) => {
      const Comp = asChild ? Slot : "div";
      return (
        <Comp
          className={cx(css({ display: "flex", justifyContent: "flex-end", gap: "4" }), className)}
          {...props}
        >
          {children}
        </Comp>
      );
    }),
  };
};

//#endregion Define Stepper

//#region Stepper Title

const StepperTitle = styled(
  ({
    children,
    className,
    asChild,
    ...props
  }: React.ComponentProps<"h4"> & { asChild?: boolean }) => {
    const Comp = asChild ? Slot : "h4";

    return (
      <Comp className={cx(css({ textStyle: "md", fontWeight: "medium" }), className)} {...props}>
        {children}
      </Comp>
    );
  }
);

//#endregion Stepper Title

//#region Stepper Description

const StepperDescription = styled(
  ({
    children,
    className,
    asChild,
    ...props
  }: React.ComponentProps<"p"> & { asChild?: boolean }) => {
    const Comp = asChild ? Slot : "p";

    return (
      <Comp className={cx(css({ textStyle: "sm", color: "muted.fg" }), className)} {...props}>
        {children}
      </Comp>
    );
  }
);

//#endregion Stepper Description

//#region Stepper Separator

const StepperSeparator = ({
  orientation,
  isLast,
  labelOrientation,
  state,
  disabled,
}: {
  isLast: boolean;
  state: string;
  disabled?: boolean;
} & RecipeVariantProps<typeof classForSeparator>) => {
  if (isLast) {
    return null;
  }
  return (
    <div
      data-orientation={orientation}
      data-state={state}
      data-disabled={disabled}
      role="separator"
      tabIndex={-1}
      className={classForSeparator({ orientation, labelOrientation })}
    />
  );
};

//#endregion Stepper Separator

//#region Circle Indicator

const CircleStepIndicator = ({
  currentStep,
  totalSteps,
  size = 80,
  strokeWidth = 6,
}: CircleStepIndicatorProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const fillPercentage = (currentStep / totalSteps) * 100;
  const dashOffset = circumference - (circumference * fillPercentage) / 100;
  return (
    <div
      role="progressbar"
      aria-valuenow={currentStep}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      tabIndex={-1}
      className={css({
        pos: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <svg width={size} height={size}>
        <title>Step Indicator</title>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={css({ color: "muted.fg" })}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className={css({
            color: "primary",
            transition: "all",
            transitionDuration: "normal",
            transitionTimingFunction: "ease-in-out",
          })}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div
        className={css({
          pos: "absolute",
          inset: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <span className={css({ textStyle: "sm", fontWeight: "medium" })} aria-live="polite">
          {currentStep} of {totalSteps}
        </span>
      </div>
    </div>
  );
};

//#endregion Circle Indicator

//#region Styles

const listVariants = cva({
  base: {
    display: "flex",
    gap: "2",
  },
  variants: {
    variant: {
      horizontal: { flexDir: "row", alignItems: "center", justifyContent: "space-between" },
      vertical: { flexDir: "column" },
      circle: { flexDir: "row", alignItems: "center", justifyContent: "space-between" },
    },
  },
});

const classForSeparator = cva({
  base: {
    bg: "muted",
    transition: "all",
    transitionDuration: "normal",
    transitionTimingFunction: "ease-in-out",
    "&[data-state=completed]": {
      bg: "primary",
    },
    _disabled: {
      opacity: "0.5",
    },
  },
  variants: {
    orientation: {
      horizontal: { h: "0.5", flex: "1" },
      vertical: { h: "full", w: "0.5" },
    },
    labelOrientation: {
      vertical: {
        pos: "absolute",
        left: "calc(50% + 30px)",
        right: "calc(-50% + 20px)",
        top: "5",
        display: "block",
        shrink: "0",
      },
    },
  },
});

//#endregion Styles

//#region Utils

function scrollIntoStepperPanel(node: HTMLDivElement | null, tracking?: boolean) {
  if (tracking) {
    node?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

const useStepChildren = (children: React.ReactNode) => {
  return React.useMemo(() => extractChildren(children), [children]);
};

const extractChildren = (children: React.ReactNode) => {
  const childrenArray = React.Children.toArray(children);
  const map = new Map<string, React.ReactNode>();

  for (const child of childrenArray) {
    if (React.isValidElement(child)) {
      if (child.type === StepperTitle) {
        map.set("title", child);
      } else if (child.type === StepperDescription) {
        map.set("description", child);
      } else {
        map.set("panel", child);
      }
    }
  }

  return map;
};

const onStepKeyDown = (
  e: React.KeyboardEvent<HTMLButtonElement>,
  nextStep: Stepperize.Step,
  prevStep: Stepperize.Step
) => {
  const { key } = e;
  const directions = {
    next: ["ArrowRight", "ArrowDown"],
    prev: ["ArrowLeft", "ArrowUp"],
  };

  if (directions.next.includes(key) || directions.prev.includes(key)) {
    const direction = directions.next.includes(key) ? "next" : "prev";
    const step = direction === "next" ? nextStep : prevStep;

    if (!step) {
      return;
    }

    const stepElement = document.getElementById(`step-${step.id}`);
    if (!stepElement) {
      return;
    }

    const isActive = stepElement.parentElement?.getAttribute("data-state") !== "inactive";
    if (isActive || direction === "prev") {
      stepElement.focus();
    }
  }
};

const getStepState = (currentIndex: number, stepIndex: number) => {
  if (currentIndex === stepIndex) {
    return "active";
  }
  if (currentIndex > stepIndex) {
    return "completed";
  }
  return "inactive";
};

//#endregion Utils

export { defineStepper };
