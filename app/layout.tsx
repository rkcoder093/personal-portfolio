import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ritik Kumar Keshri | Full Stack Developer",
  description: "Full Stack Developer & AI and Cyber Security Enthusiast with expertise in Next.js, React, Spring Boot and Django technologies.",
  // metadataBase: new URL("https://"),
  
  // Basic metadata
  applicationName: "Ritik Kumar Keshri Portfolio",
  authors: [{ name: "Ritik Kumar Keshri" }],
  keywords: ["Full Stack Developer", "Web3","Next.js", "React", "ML", "AI", "Cyber Security", "Portfolio"],
  
  openGraph: {
    type: "website",
    url: "",
    title: "Ritik Kumar Keshri | Full Stack Developer",
    description: "Full Stack Developer & AI and Cyber Security Enthusiast with expertise in Next.js, React, Spring Boot and Django technologies.",
    siteName: "Ritik Kumar Keshri",
    locale: "en_US",
    // images: [
    //   {
    //     url: "/images/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Ritik Kumar Keshri - Portfolio",
    //   },
    // ],
  },
  
  // icons: {
  //   icon: [
  //     { url: "/favicon.ico" },
  //     { url: "/icon.png", type: "image/png" },
  //   ],
  //   apple: { url: "/apple-touch-icon.png" },
  // },
  
  // alternates: {
  //   canonical: "https://",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}