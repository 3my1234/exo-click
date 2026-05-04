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
      <body>{children}</body>
    </html>
  );
}
