import "../styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Suspense } from "react";

const opensans = Open_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "Develops Today",
  description: "Develops Today test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${opensans.variable} antialiased`}>
        <Suspense fallback={<div>Loading content ... </div>}>
          <section className="py-16">{children}</section>
        </Suspense>
      </body>
    </html>
  );
}
