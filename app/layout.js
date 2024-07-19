import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../app/components/navigation"


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
                  
      <html lang="en">
      <body><Navigation></Navigation>{children}</body>
    </html>
  );
}
