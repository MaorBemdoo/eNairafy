import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";

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
    <ReactQueryClientProvider>
      <html lang="en">
        <body className="container px-4 mx-auto">
          <Header />
          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
