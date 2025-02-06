"use client";

import { ComponentType, createContext, useContext } from "react";
import { cx } from "styled-system/css";

type AnyProps = Record<string, unknown>;
type AnyRecipe = {
  (props?: AnyProps): Record<string, string>;
  splitVariantProps: (props: AnyProps) => any;
};

type Slots<R extends () => Record<string, string>> = keyof ReturnType<R>;

interface StyleContextType {
  [key: string]: string;
}

type WithClassName = { className?: string };

export const createStyleContext = (recipe: AnyRecipe) => {
  const StyleContext = createContext<StyleContextType | null>(null);

  const withProvider = <P extends AnyProps & WithClassName>(
    Component: ComponentType<P>,
    part?: Slots<AnyRecipe>
  ): ComponentType<P> => {
    const Comp: ComponentType<P> = (props: P) => {
      const [variantProps, rest] = recipe.splitVariantProps(props);
      const styles = recipe(variantProps);
      return (
        <StyleContext value={styles}>
          <Component {...rest} className={cx(styles?.[part ?? ""], props.className)} />
        </StyleContext>
      );
    };
    Comp.displayName = Component.displayName || Component.name;
    return Comp;
  };

  const withContext = <P extends AnyProps & WithClassName>(
    Component: ComponentType<P>,
    part?: Slots<AnyRecipe>
  ): ComponentType<P> => {
    if (!part) return Component;

    const Comp: ComponentType<P> = (props: P) => {
      const styles = useContext(StyleContext);
      return <Component {...props} className={cx(styles?.[part ?? ""], props.className)} />;
    };
    Comp.displayName = Component.displayName || Component.name;
    return Comp;
  };

  return { withProvider, withContext };
};
