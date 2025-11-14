import React, { useState } from "react";
import { INITIAL_DATA } from "@/lib/data";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Card } from "@/components/Card";
import { Separator } from "@/components/Separator";
import { Alert } from "@/components/Alert";

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [tab, setTab] = useState("dashboard");
  const [alert, setAlert] = useState<{type?: "success"|"error"|"info", message: string} | null>(null);
  
  // API GET test (display API status)
  const checkApi = async () => {
    const res = await fetch("http://localhost:3001/api/v1/test");
    const json = await res.json();
    setAlert({ type: "success", message: json.message });
  };

  // API POST save
  const saveData = async () => {
    const res = await fetch("http://localhost:3001/api/v1/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    setAlert({ type: json.success ? "success" : "error", message: json.message });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4 text-xl font-bold text-primary">Lingofy Dashboard (Sakura-Tech Theme)</header>
      <Separator />

      <nav className="flex mb-8 gap-2">
        <Button onClick={() => setTab("dashboard")}>Dashboard</Button>
        <Button onClick={() => setTab("reviews")}>Reviews</Button>
        <Button onClick={() => setTab("studio")}>Studio</Button>
        <Button variant="ghost" onClick={checkApi}>Check API</Button>
      </nav>

      <div className="container mx-auto mt-4">
        {alert && <Alert type={alert.type}>{alert.message}</Alert>}
        {tab === "dashboard" && (
          <Card>
            <h2 className="text-lg font-bold mb-3">Site Profile</h2>
            <Input label="Site Name" value={data.meta.siteName} onChange={e => setData(d => ({...d, meta: { ...d.meta, siteName: e.target.value }}))} />
            <Input label="Site Slug" value={data.meta.siteSlug} onChange={e => setData(d => ({...d, meta: { ...d.meta, siteSlug: e.target.value }}))} />
            <Input label="Base Language" value={data.meta.baseLanguage} onChange={e => setData(d => ({...d, meta: { ...d.meta, baseLanguage: e.target.value }}))} />
            <Input label="Base Currency" value={data.meta.baseCurrency} onChange={e => setData(d => ({...d, meta: { ...d.meta, baseCurrency: e.target.value }}))} />
            <Separator />
            <Button onClick={saveData}>Save Profile</Button>
          </Card>
        )}
        {tab === "reviews" && (
          <Card>
            <h2 className="text-lg font-bold mb-3">Product Details</h2>
            <Input label="Title" value={data.product.title} onChange={e => setData(d => ({...d, product: { ...d.product, title: e.target.value }}))} />
            <Textarea label="Description" value={data.product.description} onChange={e => setData(d => ({...d, product: { ...d.product, description: e.target.value }}))} />
            <Input type="number" label="Price" value={data.product.price} onChange={e => setData(d => ({...d, product: { ...d.product, price: Number(e.target.value) }}))} />
            <Separator />
            <Button onClick={saveData}>Save Product</Button>
          </Card>
        )}
        {tab === "studio" && (
          <Card>
            <h2 className="text-lg font-bold mb-3">Contact + Socials</h2>
            <Input label="Email" value={data.contact.email} onChange={e => setData(d => ({...d, contact: { ...d.contact, email: e.target.value }}))} />
            <Input label="Phone" value={data.contact.phone} onChange={e => setData(d => ({...d, contact: { ...d.contact, phone: e.target.value }}))} />
            <Input label="Twitter" value={data.socials.twitter} onChange={e => setData(d => ({...d, socials: { ...d.socials, twitter: e.target.value }}))} />
            <Input label="Instagram" value={data.socials.instagram} onChange={e => setData(d => ({...d, socials: { ...d.socials, instagram: e.target.value }}))} />
            <Input label="LinkedIn" value={data.socials.linkedin} onChange={e => setData(d => ({...d, socials: { ...d.socials, linkedin: e.target.value }}))} />
            <Separator />
            <Button onClick={saveData}>Save Contacts</Button>
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
