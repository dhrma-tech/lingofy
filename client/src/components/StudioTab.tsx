import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "lucide-react";
import { INITIAL_DATA } from "@/lib/data";

export function StudioTab() {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [apiStatus, setApiStatus] = useState({ loading: false, message: '', success: false });

  const handleFormChange = (section: string, field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        // @ts-ignore
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    console.log("Saving data:", formData);
    setApiStatus({ loading: true, message: 'Saving...', success: false });

    fetch('http://localhost:3001/api/v1/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setApiStatus({ loading: false, message: 'Data saved successfully!', success: true });
      } else {
        setApiStatus({ loading: false, message: 'Error saving data.', success: false });
      }
      setTimeout(() => setApiStatus({ loading: false, message: '', success: false }), 3000);
    })
    .catch(() => {
      setApiStatus({ loading: false, message: 'API connection error.', success: false });
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Creator Studio</h2>
          <p className="text-muted-foreground">This is where your global store comes to life.</p>
        </div>
        <Button onClick={handleSave} disabled={apiStatus.loading}>
          {apiStatus.loading ? "Saving..." : "Save All Changes"}
        </Button>
      </div>

      {apiStatus.message && (
        <Alert variant={apiStatus.success ? "default" : "destructive"}>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>{apiStatus.success ? "Success!" : "Error"}</AlertTitle>
          <AlertDescription>{apiStatus.message}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="site" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="site">Site Info</TabsTrigger>
          <TabsTrigger value="product">Product</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>
        
        <TabsContent value="site">
          <Card>
            <CardHeader>
              <CardTitle>Site Info</CardTitle>
              <CardDescription>Your store's global identity. * is required.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Store Name *</Label>
                  <Input id="siteName" placeholder="Anna's Art Prints" value={formData.meta.siteName}
                    onChange={(e) => handleFormChange('meta', 'siteName', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siteSlug">Site Slug (URL) *</Label>
                  <Input id="siteSlug" placeholder="annas-art-prints" value={formData.meta.siteSlug}
                    onChange={(e) => handleFormChange('meta', 'siteSlug', e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Creator Bio</Label>
                <Textarea id="bio" placeholder="Tell your story..." value={formData.creator.bio}
                  onChange={(e) => handleFormChange('creator', 'bio', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location (for GMap)</Label>
                <Input id="location" placeholder="123 Main St, San Francisco, CA" value={formData.creator.location}
                  onChange={(e) => handleFormChange('creator', 'location', e.target.value)} />
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email</Label>
                  <Input id="email" type="email" placeholder="anna@example.com" value={formData.contact.email}
                    onChange={(e) => handleFormChange('contact', 'email', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Phone</Label>
                  <Input id="phone" placeholder="+1 555-123-4567" value={formData.contact.phone}
                    onChange={(e) => handleFormChange('contact', 'phone', e.target.value)} />
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter Handle</Label>
                  <Input id="twitter" placeholder="annas_art" value={formData.socials.twitter}
                    onChange={(e) => handleFormChange('socials', 'twitter', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram Handle</Label>
                  <Input id="instagram" placeholder="anna_draws" value={formData.socials.instagram}
                    onChange={(e) => handleFormChange('socials', 'instagram', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn URL</Label>
                  <Input id="linkedin" placeholder="linkedin.com/in/..." value={formData.socials.linkedin}
                    onChange={(e) => handleFormChange('socials', 'linkedin', e.target.value)} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="product">
          <Card>
            <CardHeader>
              <CardTitle>Your Product</CardTitle>
              <CardDescription>Details about what you're selling. * is required.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="prodTitle">Product Title *</Label>
                <Input id="prodTitle" placeholder="Sunset Cityscape" value={formData.product.title}
                  onChange={(e) => handleFormChange('product', 'title', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prodDesc">Product Description</Label>
                <Textarea id="prodDesc" placeholder="A 12x18 inch print..." value={formData.product.description}
                  onChange={(e) => handleFormChange('product', 'description', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prodPrice">Price</Label>
                  <Input id="prodPrice" type="number" placeholder="19.99" value={formData.product.price}
                    onChange={(e) => handleFormChange('product', 'price', e.target.valueAsNumber)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prodCurrency">Currency *</Label>
                  <Input id="prodCurrency" value={formData.meta.baseCurrency} disabled />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Product Images</Label>
                <div className="w-full h-32 border-dashed border-2 rounded-lg flex items-center justify-center bg-muted/50">
                  <p className="text-muted-foreground">[Image Upload Widget Here]</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blog">
          <Card>
            <CardHeader>
              <CardTitle>Blog</CardTitle>
              <CardDescription>Write posts to engage your global audience.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-80 bg-muted/50 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">[Blog Post Manager Here]</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}