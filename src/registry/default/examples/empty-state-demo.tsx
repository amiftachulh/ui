import { LuShoppingCart } from "react-icons/lu";
import { Button } from "@/registry/default/ui/button";
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateContent,
  EmptyStateDescription,
  EmptyStateIndicator,
  EmptyStateTitle,
} from "@/registry/default/ui/empty-state";

export default function EmptyStateDemo() {
  return (
    <EmptyState>
      <EmptyStateIndicator css={{ textStyle: "5xl" }}>
        <LuShoppingCart />
      </EmptyStateIndicator>
      <EmptyStateContent>
        <EmptyStateTitle>Your cart is empty</EmptyStateTitle>
        <EmptyStateDescription>
          Explore our products and add items to your cart
        </EmptyStateDescription>
      </EmptyStateContent>
      <EmptyStateActions>
        <Button>Explore products</Button>
        <Button variant="outline">Learn more</Button>
      </EmptyStateActions>
    </EmptyState>
  );
}
