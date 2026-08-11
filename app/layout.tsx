import type { Metadata } from "next";
import "@fontsource/syncopate/400.css";
import "@fontsource/syncopate/700.css";
import "@fontsource-variable/josefin-sans";
import "./globals.css";
import { copy } from "./copy";

export const metadata: Metadata = {
  metadataBase: new URL("https://sebasmollinedo.vercel.app"),
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  openGraph: {
    title: copy.es.meta.title,
    description: copy.es.meta.description,
    locale: "es_GT",
    type: "profile",
    images: ["/sebastian.jpg"],
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
