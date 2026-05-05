import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Secure File Previewer",
  description: "Secure preview and access checkpoint for verified users.",
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="6a97888e-site-verification" content="2d328a3c1dce1041feeab72e8d6163ec" />
      </head>
      <body>{children}</body>
    </html>
  );
}
