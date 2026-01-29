import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/features/providers/LenisProvider";
import ReactQueryProvider from "@/features/providers/ReactQuery";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { jetbrainsMono } from "./fonts";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "DevDeck | Your App Portfolio",
  description: "Get your app Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.className} antialiased`}
      >
        <LenisProvider>
          <NuqsAdapter>
            <ReactQueryProvider>
              {children}
              <Toaster />
            </ReactQueryProvider>
          </NuqsAdapter>
        </LenisProvider>

        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      </body>
    </html>
  );
} 
