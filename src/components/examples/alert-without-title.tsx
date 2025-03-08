import { LuCircleCheckBig } from "react-icons/lu";
import { Alert, AlertContent, AlertDescription, AlertIcon } from "@/components/ui/alert";

export default function AlertWithoutTitle() {
  return (
    <Alert variant="success" css={{ w: "2/3" }}>
      <AlertIcon>
        <LuCircleCheckBig />
      </AlertIcon>
      <AlertContent>
        <AlertDescription>This alert doesn&apos;t have a title.</AlertDescription>
      </AlertContent>
    </Alert>
  );
}
