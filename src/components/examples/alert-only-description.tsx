import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AlertOnlyDescription() {
  return (
    <Alert variant="warning" css={{ w: "2/3" }}>
      <AlertDescription>This is a minimal alert with just description.</AlertDescription>
    </Alert>
  );
}
