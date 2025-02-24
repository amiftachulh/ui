import { Alert } from "@/components/ui/alert";

export default function AlertOnlyDescription() {
  return (
    <Alert.Root variant="warning">
      <Alert.Description>This is a minimal alert with just description.</Alert.Description>
    </Alert.Root>
  );
}
