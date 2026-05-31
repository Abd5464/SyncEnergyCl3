import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

// Font optimization via next/font — exposed as CSS variables consumed in
// tailwind.config.ts (font-sans / font-display).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sync Energy — Waste to Power. Locally Built. Nationally Scalable.",
  description:
    "Sync Energy is a Nigerian biogas startup converting organic waste into clean energy, cooking gas, and organic fertilizer through IoT-enabled biodigesters.",
  keywords: [
    "biogas",
    "Nigeria",
    "clean energy",
    "organic fertilizer",
    "circular economy",
    "IoT",
    "renewable energy",
  ],
  openGraph: {
    title: "Sync Energy — Transforming Organic Waste into Power",
    description:
      "Green Energy · Smart Infrastructure · Circular Economy. Driven by real-time IoT telemetry at its source.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A7A4A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
