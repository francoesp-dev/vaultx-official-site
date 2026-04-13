import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vaultx-web.vercel.app"),
  title: "VaultX | Local Password Manager",
  description:
    "The open-source, military-grade password manager that keeps your credentials encrypted, local, and exclusively on your device.",
  keywords: [
    "password manager",
    "local first",
    "react native",
    "expo",
    "offline password manager",
    "AES-256",
  ],
  authors: [{ name: "Franco" }],
  openGraph: {
    title: "VaultX | Your Data. Your Rules.",
    description:
      "A military-grade, local-first password manager. Open source and built for absolute privacy.",
    url: "https://vaultx-web.vercel.app", // Reemplazaremos esto con tu dominio real de Vercel luego
    siteName: "VaultX",
    images: [
      {
        url: "/screenshots/banner.png",
        width: 1200,
        height: 630,
        alt: "VaultX Password Manager",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VaultX | Local Password Manager",
    description: "Your Data. Your Rules. Zero Cloud.",
    images: ["/screenshots/banner.png"],
  },
  icons: {
    icon: "/screenshots/logo.png",
    apple: "/screenshots/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#050505] text-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
