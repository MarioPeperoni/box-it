import type { Metadata } from "next";

import Footer from "./(site)/components/Footer";
import Header from "./(site)/components/Header";

import "./globals.css";

import { Toaster } from "react-hot-toast";
import AuthContext from "./context/AuthContext";

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
