import type { Metadata } from "next";
import "@/styles/globals.scss";
import Header from "@/components/Header";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
import Footer from "@/components/Footer";

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
