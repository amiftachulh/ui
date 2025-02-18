"use client";

import * as React from "react";
import { cx } from "styled-system/css";

type Props = Record<string, unknown>;
type Recipe = {
  (props?: Props): Props;
  splitVariantProps: (props: Props) => [Props, Props];
};
type Slot<R extends Recipe> = keyof ReturnType<R>;

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = React.createContext<Record<Slot<R>, string> | null>(null);

  const withRootProvider = <T extends object>(Component: React.ComponentType<T>) => {
    const RootProvider = (props: T & Parameters<R>[0]) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = recipe(variantProps) as Record<Slot<R>, string>;

      return (
        <StyleContext value={slotStyles}>
          <Component {...(otherProps as T)} />
        </StyleContext>
      );
    };

    RootProvider.displayName = Component.displayName || Component.name;
    return RootProvider;
  };

  const withProvider = <T,>(Component: React.ComponentType<T>, slot: Slot<R>) => {
    const SlotProvider = ({
      className,
      ...props
    }: T & { className?: string } & Parameters<R>[0]) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = recipe(variantProps) as Record<Slot<R>, string>;

      return (
        <StyleContext value={slotStyles}>
          <Component className={cx(slotStyles?.[slot ?? ""], className)} {...(otherProps as T)} />
        </StyleContext>
      );
    };

    return SlotProvider as React.ComponentType<T>;
  };

  const withContext = <T,>(Component: React.ComponentType<T>, slot: Slot<R>) => {
    if (!slot) return Component;

    const SlotComponent = ({ className, ...props }: T & { className?: string }) => {
      const styles = React.useContext(StyleContext);
      return <Component className={cx(styles?.[slot ?? ""], className)} {...(props as T)} />;
    };

    return SlotComponent as React.ComponentType<T>;
  };

  return { withRootProvider, withProvider, withContext };
};
