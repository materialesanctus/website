import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "600"],
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Sanctus Pro Deo - Christian Music Group",
  description: "Sanctus Pro Deo is a Christian music group sharing the message of salvation through music and worship.",
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
        {children}
      </body>
    </html>
  );
}