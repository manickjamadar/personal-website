import Footer from "./components/sections/footer";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manick Jamadar - Full Stack Developer",
  description:
    "My Name is Manick Jamadar. I am full stack web develoer, mobile app developer and also UI/UX Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="background">
          <div className="mesh-gradient-1"></div>
        </div>
        <div className="app">
          <div className="main">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
