"use client";
import "./globals.css";
import BackToTop from "./component/BackToTop";
import Sidebar from "./component/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
