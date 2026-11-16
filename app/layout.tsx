
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Champs Swimming Academy | Where Champions Begin",
    template: "%s | Champs Swimming Academy",
  },
  description:
    "Discover professional swimming lessons for babies, children and adults at Champs Swimming Academy in Nairobi, Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
