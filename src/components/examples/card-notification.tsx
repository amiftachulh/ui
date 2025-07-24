import { LuBellRing, LuCheck } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export default function CardNotification() {
  return (
    <Card css={{ w: "380px" }}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent css={{ display: "grid", gap: "4" }}>
        <styled.div
          css={{ display: "flex", alignItems: "center", gap: "4", borderWidth: "1px", p: "4" }}
        >
          <LuBellRing />
          <styled.div css={{ flex: 1, spaceY: "1" }}>
            <styled.p css={{ textStyle: "sm", fontWeight: "medium", lineHeight: "none" }}>
              Push Notifications
            </styled.p>
            <styled.p css={{ textStyle: "sm", color: "muted.fg" }}>
              Send notifications to device.
            </styled.p>
          </styled.div>
          <Switch />
        </styled.div>
        <div>
          {notifications.map((notification, index) => (
            <styled.div
              key={index}
              css={{
                mb: "4",
                display: "grid",
                gridTemplateColumns: "25px 1fr",
                alignItems: "flex-start",
                pb: "4",
                _last: { mb: "0", pb: "0" },
              }}
            >
              <styled.span
                css={{
                  display: "flex",
                  w: "2",
                  h: "2",
                  transform: "translateY(0.25rem)",
                  rounded: "full",
                  bg: "sky.500",
                }}
              />
              <styled.div css={{ spaceY: "1" }}>
                <styled.p css={{ textStyle: "sm", fontWeight: "medium", lineHeight: "none" }}>
                  {notification.title}
                </styled.p>
                <styled.p css={{ textStyle: "sm", color: "muted.fg" }}>
                  {notification.description}
                </styled.p>
              </styled.div>
            </styled.div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button css={{ w: "full" }}>
          <LuCheck /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}
