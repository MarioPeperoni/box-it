import type { Metadata } from "next";

import Footer from "./(site)/components/Footer";
import Header from "./(site)/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Box It!",
  description: "Sell and discover unique items!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-16">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
