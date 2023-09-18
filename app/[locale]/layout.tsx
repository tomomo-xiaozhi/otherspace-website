"use client";
import "../../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import BottomNav from "@/components/BottomNav";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateStaticParams() {
  return ["en", "ja"].map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head />
      <body className="dark:bg-stone-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
            <Footer />
            <BottomNav />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
