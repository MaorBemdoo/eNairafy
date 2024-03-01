import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ENairafy - Overview",
  description: "Buy your electronics at an affodable price with no hustle",
  authors: {name: "🚀Bemdoo Maor"},
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
