import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fundación Ángulo — Por la Infancia y Adolescencia Sorda",
  description: "Fundación Ángulo aboga por los derechos de niños y adolescentes sordos en Chile, promoviendo su inclusión, educación y desarrollo pleno en lengua de señas.",
  keywords: ["fundación", "niños sordos", "adolescentes sordos", "inclusión", "LSCh", "Chile", "derechos infancia sorda"],
  openGraph: {
    title: "Fundación Ángulo — Por la Infancia y Adolescencia Sorda",
    description: "Abogamos por los derechos de niños y adolescentes sordos en Chile.",
    url: "https://fundacionangulo.org",
    siteName: "Fundación Ángulo",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
