import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DashboardTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Global Reach</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-80 bg-muted/50 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">[Your "World Map" component will go here]</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Share Kit</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="w-full aspect-square bg-muted/50 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">[QR Code]</p>
          </div>
          <Button className="w-full">Download Share Card</Button>
          <Button variant="secondary" className="w-full">Copy Live URL</Button>
        </CardContent>
      </Card>
    </div>
  );
}