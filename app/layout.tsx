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
          <div className="mesh-gradient"></div>
        </div>
        <div className="app">{children}</div>
      </body>
    </html>
  );
}
