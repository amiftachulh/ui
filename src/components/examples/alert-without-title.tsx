import { LuCircleCheckBig } from "react-icons/lu";
import { Alert } from "@/components/ui/alert";

export default function AlertWithoutTitle() {
  return (
    <Alert.Root variant="success">
      <Alert.Icon>
        <LuCircleCheckBig />
      </Alert.Icon>
      <Alert.Content>
        <Alert.Description>This alert doesn&apos;t have a title.</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  );
}
