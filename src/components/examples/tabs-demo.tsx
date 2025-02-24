import { Tabs } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs.Root defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <p>Make changes to your account.</p>
      </Tabs.Content>
      <Tabs.Content value="documents">
        <p>Access and update your documents.</p>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <p>Edit your profile or update contact information.</p>
      </Tabs.Content>
    </Tabs.Root>
  );
}
