import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "600"],
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Sanctus Pro Deo - Concert Crăciun 2025",
  description: "Sanctus Pro Deo vă invită la concertele de Crăciun: 6 decembrie la Sibiu și 8 decembrie la București.",
  openGraph: {
    title: "Sanctus Pro Deo - Concert Crăciun 2025",
    description: "Concerte de Crăciun: 6 decembrie la Sibiu și 8 decembrie la București.",
    images: [
      {
        url: "/assets/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "Concert Crăciun - Sanctus Pro Deo",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanctus Pro Deo - Concert Crăciun 2025",
    description: "Concerte de Crăciun: 6 decembrie la Sibiu și 8 decembrie la bucurești.",
    images: ["/assets/meta-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Baskerville:wght@400;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={poppins.variable}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {children}
      </body>
    </html>
  );
}