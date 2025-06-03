import "./globals.css";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/DisableDraftMode";

// Agrega el objeto metadata aquí
export const metadata = {
  title: "Presbiterianismo",
  description: "Descubre artículos y recursos sobre el presbiterianismo.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Presbiterianismo",
    description: "Descubre artículos y recursos sobre el presbiterianismo.",
    url: "https://www.presbiterianismo.com",
    siteName: "Presbiterianismo",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Presbiterianismo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Presbiterianismo",
    description: "Descubre artículos y recursos sobre el presbiterianismo.",
    images: ["/logo.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}