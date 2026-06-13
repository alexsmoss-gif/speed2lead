import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.speed2lead.co.za"),
  title: "Speed 2 Lead | Internet Lead Response Training For Motor Dealers",
  description:
    "Speed 2 Lead helps motor dealership teams respond to online leads faster, set better appointments, and improve sales performance.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Speed 2 Lead | Internet Lead Response Training For Motor Dealers",
    description:
      "Motor dealership lead response training for faster contact, better appointments, and stronger sales outcomes.",
    url: "https://www.speed2lead.co.za",
    siteName: "Speed 2 Lead",
    images: ["/lead-hero-car.jpg"],
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
