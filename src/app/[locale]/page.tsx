import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/PortfolioPage";

const locales = ["pt", "en"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) notFound();
  return <PortfolioPage locale={locale as (typeof locales)[number]} />;
}
