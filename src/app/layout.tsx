import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "성찬식 커리큘럼 | Lord's Supper Curriculum",
  description:
    "Comprehensive curriculum: key concepts from the Lord's Supper (성찬식) study, aligned with transcript and research. Step-by-step format for structured learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
