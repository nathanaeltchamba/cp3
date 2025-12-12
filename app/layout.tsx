import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecaptchaWrapper from "@/components/RecaptchaWrapper";

export const metadata: Metadata = {
  title: "CP3 Plumbing",
  description: "With over 6 years of trusted service, CP3 Plumbing delivers expert plumbing solutions for both residential and commercial clients.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <RecaptchaWrapper>
          <main className="relative overflow-hidden">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </RecaptchaWrapper>
        <Footer />
      </body>
    </html>
  );
}
