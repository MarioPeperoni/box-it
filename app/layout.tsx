import type { Metadata } from "next";

import AuthContext from "@/context/AuthContext";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "@/app/globals.css";

import { Toaster } from "react-hot-toast";

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
        <AuthContext>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
