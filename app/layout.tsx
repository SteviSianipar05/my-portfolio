import "./globals.css";
import MiniHeader from "@/app/components/MiniHeader";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stevi Greis Sianipar – Portfolio",
  description: "Computer Technology student at Institut Teknologi Del",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MiniHeader />
        {children}
      </body>
    </html>
  );
}
