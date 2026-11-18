
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/whatsapp/Whatsapp";

export const metadata: Metadata = {
  title: {
    default: "Champs Swimming Academy | Nairobi",
    template: "%s | Champs Swimming Academy",
  },
  description:
    "Learn to swim with confidence at Champs Swimming Academy in Nairobi. Explore our beginner, intermediate and advanced swimming programmes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <WhatsAppButton />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
