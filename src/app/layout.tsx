import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site";
import { SITE } from "@/lib/affiliate";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    siteName: SITE.name,
    type: "website",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "TH_b-W1560-K3IV-1nz2laGwJpvVRCr7o-G7n5OEX9c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className={`${body.className} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
