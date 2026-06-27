import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Midlane | Rock Band from Sri Lanka",
  description: "Midlane is a passionate rock band from Sri Lanka blending soulful melodies with electrifying energy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollbarWidth: "none" }}>
      <head>
        {/* FIX: user-scalable=no was preventing iOS from correctly reporting scroll positions.
             Allow zoom but set maximum-scale=5 so it's usable. viewport-fit=cover handles notch. */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}