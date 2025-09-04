import { LuCircleX } from "react-icons/lu";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/registry/default/ui/alert";

export default function AlertCustom() {
  return (
    <Alert
      css={{
        w: "2/3",
        borderStartWidth: "4px",
        borderStartColor: { base: "border.600", _dark: "red.500" },
      }}
    >
      <AlertIcon>
        <LuCircleX />
      </AlertIcon>
      <AlertContent>
        <AlertTitle css={{ textStyle: "lg" }}>Custom Styled Alert</AlertTitle>
        <AlertDescription>With custom border styling.</AlertDescription>
      </AlertContent>
    </Alert>
  );
}
