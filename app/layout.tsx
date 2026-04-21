import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { Sidebar } from "@/components/layout/sidebar";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: "variable",
  axes: ["opsz", "SOFT"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScaryMoovies Brand System",
  description:
    "The definitive visual and verbal identity guide for the ScaryMoovies horror platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
          fontFamily: "var(--font-body)",
        }}
      >
        <NextTopLoader
          color="var(--accent-hover)"
          height={2}
          showSpinner={false}
          shadow={false}
        />
        <div className="app-shell">
          <Sidebar />
          <main className="main-content">
            <div className="content-wrapper">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
