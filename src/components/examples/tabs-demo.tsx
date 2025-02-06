import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="documents">Documents</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Make changes to your account.</p>
      </TabsContent>
      <TabsContent value="documents">
        <p>Access and update your documents.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p>Edit your profile or update contact information.</p>
      </TabsContent>
    </Tabs>
  );
}
