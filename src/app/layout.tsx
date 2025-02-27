import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cripto Currency",
  description: "A simple cripto currency app",
};

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased m-0 p-0 box-border`}>
        {children}
      </body>
    </html>
  );
}
