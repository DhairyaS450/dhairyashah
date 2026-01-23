import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhairyashah.work"),
  title: {
    default: "Dhairya Shah | Full-Stack Developer & Entrepreneur",
    template: "%s | Dhairya Shah",
  },
  description:
    "Full-Stack Developer and IB Student building AI-powered solutions. Co-Founder of TidalTasks with 200+ MAU. Based in Kitchener, Ontario.",
  keywords: [
    "Dhairya Shah",
    "full-stack developer",
    "entrepreneur",
    "TidalTasks",
    "software developer",
    "IB student",
    "Next.js",
    "React",
    "AI development",
    "Kitchener",
    "Ontario",
  ],
  authors: [{ name: "Dhairya Shah" }],
  creator: "Dhairya Shah",
  publisher: "Dhairya Shah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhairyashah.work",
    title: "Dhairya Shah | Full-Stack Developer & Entrepreneur",
    description:
      "Full-Stack Developer and IB Student building AI-powered solutions. Co-Founder of TidalTasks with 200+ MAU.",
    siteName: "Dhairya Shah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dhairya Shah - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhairya Shah | Full-Stack Developer & Entrepreneur",
    description:
      "Full-Stack Developer and IB Student building AI-powered solutions. Co-Founder of TidalTasks.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-black text-gray-900 dark:text-white`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
