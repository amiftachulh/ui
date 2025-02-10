import { LuTerminal } from "react-icons/lu";
import { css } from "styled-system/css";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <Alert>
      <LuTerminal className={css({ w: "4", h: "4" })} />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>Hey there! This is a simple alert.</AlertDescription>
    </Alert>
  );
}
