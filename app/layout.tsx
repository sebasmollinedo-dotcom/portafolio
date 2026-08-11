import type { Metadata } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/public-sans";
import "@fontsource-variable/spline-sans-mono";
import "./globals.css";
import { copy } from "./copy";

export const metadata: Metadata = {
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  openGraph: {
    title: copy.es.meta.title,
    description: copy.es.meta.description,
    locale: "es_GT",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
