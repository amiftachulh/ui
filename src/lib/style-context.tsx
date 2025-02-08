"use client";

import * as React from "react";
import { cx } from "styled-system/css";
import { styled, type StyledComponent } from "styled-system/jsx";

type Props = Record<string, unknown>;
type Recipe = {
  (props?: Props): Props;
  splitVariantProps: (props: Props) => [Props, Props];
};
type ExtractVariantProps<R extends Recipe> = Parameters<R>[0];
type Slot<R extends Recipe> = keyof ReturnType<R>;

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = React.createContext<Record<Slot<R>, string> | null>(null);

  const withProvider = <
    T extends React.ElementType,
    P extends { className?: string } & ExtractVariantProps<R>,
  >(
    Component: T,
    slot: Slot<R>
  ): StyledComponent<T, P> => {
    const StyledComponent = styled(Component) as StyledComponent<React.ElementType>;

    const StyledSlotProvider = ({ className, ...props }: P) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = recipe(variantProps) as Record<Slot<R>, string>;

      return (
        <StyleContext value={slotStyles}>
          <StyledComponent className={cx(slotStyles?.[slot ?? ""], className)} {...otherProps} />
        </StyleContext>
      );
    };

    // @ts-expect-error StyledSlotProvider is a valid React component
    StyledSlotProvider.displayName = Component.displayName || Component.name;

    return StyledSlotProvider;
  };

  const withContext = <T extends React.ElementType, P extends { className?: string }>(
    Component: T,
    slot: Slot<R>
  ): StyledComponent<T, P> => {
    const StyledComponent = styled(Component) as StyledComponent<React.ElementType>;

    const StyledSlotComponent = ({ className, ...props }: P) => {
      const styles = React.useContext(StyleContext);
      return <StyledComponent className={cx(styles?.[slot ?? ""], className)} {...props} />;
    };

    // @ts-expect-error StyledSlotComponent is a valid React component
    StyledSlotComponent.displayName = Component.displayName || Component.name;

    return StyledSlotComponent;
  };

  return { withProvider, withContext };
};
