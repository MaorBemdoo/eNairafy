import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ENairafy - Overview",
  description: "Make sales with no hustle",
  authors: {name: "🚀Bemdoo Maor"},
  icons:  "../../public/logo.png"
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
