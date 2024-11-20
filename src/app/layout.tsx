import type { Metadata } from "next";
import "./chassis.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Arnold Clark Garage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="ch-container">
          {children}
        </div>
      </body>
    </html>
  );
}
