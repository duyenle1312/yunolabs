import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yunolabs",
  description: "Created by Duyen Le",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
