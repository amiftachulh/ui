import { LuCircleCheckBig, LuCircleX, LuInfo, LuTriangleAlert } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Alert } from "@/components/ui/alert";

export default function AlertVariant() {
  return (
    <styled.div css={{ spaceY: "4" }}>
      {/* Info variant */}
      <Alert.Root variant="info">
        <Alert.Icon>
          <LuInfo />
        </Alert.Icon>
        <Alert.Content>
          <Alert.Title>Info</Alert.Title>
          <Alert.Description>This is an info message.</Alert.Description>
        </Alert.Content>
      </Alert.Root>

      {/* Success variant */}
      <Alert.Root variant="success">
        <Alert.Icon>
          <LuCircleCheckBig />
        </Alert.Icon>
        <Alert.Content>
          <Alert.Title>Success!</Alert.Title>
          <Alert.Description>Your changes have been saved successfully.</Alert.Description>
        </Alert.Content>
      </Alert.Root>

      {/* Warning variant */}
      <Alert.Root variant="warning">
        <Alert.Icon>
          <LuTriangleAlert />
        </Alert.Icon>
        <Alert.Content>
          <Alert.Title>Warning</Alert.Title>
          <Alert.Description>Your subscription will expire in 7 days.</Alert.Description>
        </Alert.Content>
      </Alert.Root>

      {/* Danger variant */}
      <Alert.Root variant="danger">
        <Alert.Icon>
          <LuCircleX />
        </Alert.Icon>
        <Alert.Content>
          <Alert.Title>Error</Alert.Title>
          <Alert.Description>Failed to save changes. Please try again.</Alert.Description>
        </Alert.Content>
      </Alert.Root>
    </styled.div>
  );
}
