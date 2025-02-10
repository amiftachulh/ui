import {
  LuCircleAlert,
  LuCircleCheck,
  LuCircleCheckBig,
  LuInfo,
  LuTriangleAlert,
} from "react-icons/lu";
import { stack } from "styled-system/patterns";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertVariant() {
  return (
    <div className={stack({ gap: "4" })}>
      <Alert variant="info">
        <LuInfo />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>This is an info alert.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <LuCircleCheckBig />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>This is a success alert.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <LuTriangleAlert />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This is a warning alert.</AlertDescription>
      </Alert>
      <Alert variant="danger">
        <LuCircleAlert />
        <AlertTitle>Danger</AlertTitle>
        <AlertDescription>This is a danger alert.</AlertDescription>
      </Alert>
    </div>
  );
}
