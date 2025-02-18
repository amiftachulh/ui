import { Alert, AlertContent, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertWithoutIcon() {
  return (
    <Alert variant="info">
      <AlertContent>
        <AlertTitle>Info only</AlertTitle>
        <AlertDescription>This alert doesn&apos;t have an icon.</AlertDescription>
      </AlertContent>
    </Alert>
  );
}
