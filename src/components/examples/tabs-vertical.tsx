import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsVertical() {
  return (
    <Tabs defaultValue="account" orientation="vertical" css={{ w: "full" }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="documents">Documents</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" css={{ p: "2" }}>
        <p>Make changes to your accounts.</p>
      </TabsContent>
      <TabsContent value="documents" css={{ p: "2" }}>
        <p>Access and update your documents.</p>
      </TabsContent>
      <TabsContent value="settings" css={{ p: "2" }}>
        <p>Edit your profile or update contact informations.</p>
      </TabsContent>
    </Tabs>
  );
}
