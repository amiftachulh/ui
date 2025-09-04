import { LuTerminal } from "react-icons/lu";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/registry/default/ui/alert";

export default function AlertDemo() {
  return (
    <Alert css={{ w: "2/3" }}>
      <AlertIcon>
        <LuTerminal />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>Hey there! This is a simple alert.</AlertDescription>
      </AlertContent>
    </Alert>
  );
}
