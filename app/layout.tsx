import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CP3 Plumbing",
  description: "With over 6 years of trusted service, CP3 Plumbing delivers expert plumbing solutions for both residential and commercial clients. Our skilled team is dedicated to meeting every plumbing need with precision, professionalism, and a commitment to exceptional quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
