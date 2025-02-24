import { LuCircleX } from "react-icons/lu";
import { Alert } from "@/components/ui/alert";

export default function AlertCustom() {
  return (
    <Alert.Root
      css={{
        borderStartWidth: "4px",
        borderStartColor: { base: "border.600", _dark: "red.500" },
      }}
    >
      <Alert.Icon>
        <LuCircleX />
      </Alert.Icon>
      <Alert.Content>
        <Alert.Title className="text-lg">Custom Styled Alert</Alert.Title>
        <Alert.Description>With custom border styling.</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  );
}
