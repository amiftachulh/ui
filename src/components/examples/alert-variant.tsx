import { LuCircleCheckBig, LuCircleX, LuInfo, LuTriangleAlert } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/components/ui/alert";

export default function AlertVariant() {
  return (
    <styled.div css={{ w: "2/3", spaceY: "4" }}>
      {/* Info variant */}
      <Alert variant="info">
        <AlertIcon>
          <LuInfo />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>This is an info message.</AlertDescription>
        </AlertContent>
      </Alert>

      {/* Success variant */}
      <Alert variant="success">
        <AlertIcon>
          <LuCircleCheckBig />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>Your changes have been saved successfully.</AlertDescription>
        </AlertContent>
      </Alert>

      {/* Warning variant */}
      <Alert variant="warning">
        <AlertIcon>
          <LuTriangleAlert />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Your subscription will expire in 7 days.</AlertDescription>
        </AlertContent>
      </Alert>

      {/* Danger variant */}
      <Alert variant="danger">
        <AlertIcon>
          <LuCircleX />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Failed to save changes. Please try again.</AlertDescription>
        </AlertContent>
      </Alert>
    </styled.div>
  );
}
