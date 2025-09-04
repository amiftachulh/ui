import { Alert, AlertContent, AlertDescription, AlertTitle } from "@/registry/default/ui/alert";

export default function AlertWithoutIcon() {
  return (
    <Alert variant="info" css={{ w: "2/3" }}>
      <AlertContent>
        <AlertTitle>Info only</AlertTitle>
        <AlertDescription>This alert doesn&apos;t have an icon.</AlertDescription>
      </AlertContent>
    </Alert>
  );
}
