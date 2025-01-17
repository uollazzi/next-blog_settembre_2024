import type { Metadata } from "next";
import { poppins } from "@/app/fonts";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Next Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <NavBar />
        <div className="xl:container mx-auto py-4">{children}</div>
      </body>
    </html>
  );
}
