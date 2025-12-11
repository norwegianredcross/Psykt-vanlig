import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import 'rk-design-tokens/design-tokens-build/theme.css';
import '@digdir/designsystemet-css/index.css';

import "./theme-override.css";
import { HeaderWrapper } from "@/components/HeaderWrapper";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-source-sans-3",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Psykt Vanlig",
  description: "Psykt Vanlig - Kurs for mental helse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={sourceSans3.variable}>
      <body>
        <HeaderWrapper />
        {children}
      </body>
    </html>
  );
}
