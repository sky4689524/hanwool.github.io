"use client";
import "./globals.css";
import BackToTop from "./component/BackToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
