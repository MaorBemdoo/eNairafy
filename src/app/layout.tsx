import type { Metadata } from "next";
import "@/styles/globals.scss";
import Header from "@/components/Header";
import ReactQueryClientProvider from "@/app/ReactQueryClientProvider";
import Footer from "@/components/Footer";
import { baseUrl } from "@/constants";

export const metadata: Metadata = {
  title: "ENairafy - Overview",
  description: "Buy your electronics at an affodable price with no hustle",
  authors: {name: "🚀Bemdoo Maor"},
  openGraph: {
    type: "website",
    url: `${baseUrl}`,
    title: "ENairafy - Overview",
    description: "Buy your electronics at an affodable price with no hustle",
    siteName: "ENairafy",
    images: [{
      url: "/full-logo.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: `${baseUrl}`,
    creator: "@BemdooMaor",
    title: "ENairafy - Overview",
    description: "Buy your electronics at an affodable price with no hustle",
    "images": "/full-logo.png" 
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="relative w-full mobile:text-center selection:bg-green-600 selection:text-white">
          <Header />
          <ReactQueryClientProvider>
            {children}
          </ReactQueryClientProvider>
          <Footer />
        </body>
    </html>
  );
}
