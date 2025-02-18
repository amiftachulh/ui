import { LuCircleX } from "react-icons/lu";
import { css } from "styled-system/css";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/components/ui/alert";

export default function AlertCustom() {
  return (
    <Alert
      className={css({
        borderStartWidth: "4px",
        borderStartColor: { base: "border.600", _dark: "red.500" },
      })}
    >
      <AlertIcon>
        <LuCircleX />
      </AlertIcon>
      <AlertContent>
        <AlertTitle className="text-lg">Custom Styled Alert</AlertTitle>
        <AlertDescription>With custom border styling.</AlertDescription>
      </AlertContent>
    </Alert>
  );
}
