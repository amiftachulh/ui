import { Alert } from "@/components/ui/alert";

export default function AlertWithoutIcon() {
  return (
    <Alert.Root variant="info">
      <Alert.Content>
        <Alert.Title>Info only</Alert.Title>
        <Alert.Description>This alert doesn&apos;t have an icon.</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  );
}
