import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR and burnout therapy for adults. In-person and secure telehealth across California.",
  openGraph: {
    title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description: "EMDR, CBT and mindfulness-based therapy for anxiety, trauma and burnout. In-person in Santa Monica or telehealth across CA.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Karla:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
