import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudioTab } from "@/components/StudioTab";
import { DashboardTab } from "@/components/DashboardTab";
import { ReviewsTab } from "@/components/ReviewsTab";
import { Globe, LayoutGrid, MessageSquare } from "lucide-react";

function App() {
  const [apiStatus, setApiStatus] = useState('Connecting...');

  // Test API connection on load
  useEffect(() => {
    // This points to your LOCAL server, which is correct
    fetch('http://localhost:3001/api/v1/test')
      .then(res => res.json())
      .then(data => setApiStatus(data.message))
      .catch(() => setApiStatus('API Connection Failed'));
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Lingofy<span className="text-primary">.</span>
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            API Status:
            <span className={apiStatus.includes('Failed') ? "text-red-500" : "text-green-500"}>
              {apiStatus}
            </span>
          </div>
        </header>

        {/* --- MAIN TABS --- */}
        <Tabs defaultValue="studio" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
            <TabsTrigger value="studio">
              <LayoutGrid className="w-4 h-4 mr-2" />
              Studio
            </TabsTrigger>
            <TabsTrigger value="dashboard">
              <Globe className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="reviews">
              <MessageSquare className="w-4 h-4 mr-2" />
              Reviews
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="studio" className="mt-6">
            <StudioTab />
          </TabsContent>
          <TabsContent value="dashboard" className="mt-6">
            <DashboardTab />
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <ReviewsTab />
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
}

export default App;