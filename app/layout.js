import "./globals.css";

export const metadata = {
  title: "White Board",
  description: "Free for all",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressContentEditableWarning={true}
      className={`h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
