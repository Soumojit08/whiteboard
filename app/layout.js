import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "White Board",
  description: "Free for all",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressContentEditableWarning={true}
      className={`${inter.variable} font-sans h-full antialiased bg-background dark`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
