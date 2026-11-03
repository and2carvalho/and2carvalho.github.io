import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "André Carvalho — AI / LLM Engineer",
  description:
    "AI / LLM Engineer building reliable agent systems, RAG, evaluation, and workflow automation on a 7+ year production-software foundation.",
  metadataBase: new URL("https://and2carvalho.github.io"),
  openGraph: {
    title: "André Carvalho — AI / LLM Engineer",
    description:
      "AI / LLM engineering, applied research, agent systems, RAG, evaluation, and production software delivery.",
    url: "https://and2carvalho.github.io",
    siteName: "and2carvalho",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "André Carvalho — AI / LLM Engineer",
    description: "AI / LLM engineering, applied research, and production software systems.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

