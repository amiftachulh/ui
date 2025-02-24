import { LuTerminal } from "react-icons/lu";
import { Alert } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <Alert.Root>
      <Alert.Icon>
        <LuTerminal />
      </Alert.Icon>
      <Alert.Content>
        <Alert.Title>Heads up!</Alert.Title>
        <Alert.Description>Hey there! This is a simple alert.</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  );
}
