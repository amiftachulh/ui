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
    <Card w="380px">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent display="grid" gap="4">
        <styled.div display="flex" alignItems="center" gap="4" rounded="md" borderWidth="1px" p="4">
          <LuBellRing />
          <styled.div flex="1" spaceY="1">
            <styled.p textStyle="sm" fontWeight="medium" lineHeight="none">
              Push Notifications
            </styled.p>
            <styled.p textStyle="sm" color="muted.fg">
              Send notifications to device.
            </styled.p>
          </styled.div>
          <Switch />
        </styled.div>
        <div>
          {notifications.map((notification, index) => (
            <styled.div
              key={index}
              mb="4"
              display="grid"
              gridTemplateColumns="25px 1fr"
              alignItems="flex-start"
              pb="4"
              _last={{ mb: "0", pb: "0" }}
            >
              <styled.span display="flex" w="2" h="2" translateY="1" rounded="full" bg="sky.500" />
              <styled.div spaceY="1">
                <styled.p textStyle="sm" fontWeight="medium" lineHeight="none">
                  {notification.title}
                </styled.p>
                <styled.p textStyle="sm" color="muted.fg">
                  {notification.description}
                </styled.p>
              </styled.div>
            </styled.div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button w="full">
          <LuCheck /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}
