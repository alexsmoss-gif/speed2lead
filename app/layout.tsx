import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Speed 2 Lead | Internet Lead Response Training For Motor Dealers",
  description:
    "Speed 2 Lead helps motor dealership teams respond to online leads faster, set better appointments, and improve sales performance.",
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
