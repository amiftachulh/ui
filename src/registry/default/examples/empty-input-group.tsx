import { LuSearch } from "react-icons/lu";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/default/ui/empty";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/default/ui/input-group";
import { Kbd } from "@/registry/default/ui/kbd";

export default function EmptyInputGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for what you need
          below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup css={{ sm: { w: "3/4" } }}>
          <InputGroupInput placeholder="Try searching for pages..." />
          <InputGroupAddon>
            <LuSearch />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          Need help? <a href="#">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  );
}
