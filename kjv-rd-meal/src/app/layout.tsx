import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KJV Lord's Supper | 성찬식 성경 연구",
  description: "성찬식 관련 KJV 성경 구절을 카테고리별로 정리. KJV + 흠정역 한글성경전서.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
