import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ReviewsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Customer Reviews</CardTitle>
      </CardHeader>
      <CardContent>
         <div className="w-full h-80 bg-muted/50 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">[Your "Reviews Manager" table will go here]</p>
          </div>
      </CardContent>
    </Card>
  );
}