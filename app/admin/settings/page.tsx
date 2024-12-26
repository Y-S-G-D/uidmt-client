import { Input } from "@/components/ui/input"; // ShadCN Input component
import { Button } from "@/components/ui/button"; // ShadCN Button component
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // ShadCN Card components

export default function SettingsPage() {
  return (
    <div className="p-6 w-full ">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-lg font-semibold">General Settings</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Platform Name</label>
            <Input placeholder="LMS Platform" defaultValue="My LMS" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Admin Email</label>
            <Input placeholder="admin@example.com" defaultValue="admin@example.com" />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-lg font-semibold">Payment Settings</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Currency</label>
            <Input placeholder="USD" defaultValue="USD" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Revenue Split (%)</label>
            <Input placeholder="Revenue Split" defaultValue="70" />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-lg font-semibold">Notification Settings</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Enable Email Notifications</label>
            <Input type="checkbox" className="h-5 w-5" defaultChecked />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Enable SMS Notifications</label>
            <Input type="checkbox" className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>

      <div className="text-left">
        <Button variant="default">Save Settings</Button>
      </div>
    </div>
  );
}
