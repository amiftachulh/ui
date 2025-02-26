import { LuTerminal } from "react-icons/lu";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <Alert>
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
