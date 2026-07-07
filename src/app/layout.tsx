import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klaro — Vends ta formation en 10 minutes",
  description:
    "La plateforme la plus simple pour héberger et vendre ta première formation en ligne. Sans tunnel de vente, sans usine à gaz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-klaro-bg text-white antialiased">{children}</body>
    </html>
  );
}
