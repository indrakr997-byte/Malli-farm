import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Malli Farm - Pure Organic Honey",
  description: "Premium organic honey and bee products from the heart of nature. 100% pure, natural and certified organic.",
  keywords: "organic honey, pure honey, bee pollen, honey wax, natural honey india",
  openGraph: {
    title: "Malli Farm - Pure Organic Honey",
    description: "Premium organic honey directly from our farm to your table",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              color: '#F5C842',
              fontFamily: 'Inter, sans-serif',
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}