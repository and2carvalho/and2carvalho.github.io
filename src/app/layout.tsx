import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andre C.A. de Carvalho - Software Engineer",
  description:
    "Software Engineer with 5+ years shipping products. Full-stack, backend systems, marketplace integrations, and AI artifact provenance tooling.",
  metadataBase: new URL("https://and2carvalho.github.io"),
  openGraph: {
    title: "Andre C.A. de Carvalho - Software Engineer",
    description:
      "Software Engineer with 5+ years shipping products. Full-stack, backend systems, marketplace integrations, and AI artifact provenance tooling.",
    url: "https://and2carvalho.github.io",
    siteName: "and2carvalho",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Andre C.A. de Carvalho - Software Engineer",
    description:
      "Software Engineer with 5+ years shipping products. Full-stack, backend systems, marketplace integrations, and AI artifact provenance tooling.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

