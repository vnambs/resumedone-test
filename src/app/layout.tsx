import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Layout/footer";
import layoutCssModule from "./Layout/layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume Done Test",
  description: "Page made with pure css on NextJS - Jonathan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={layoutCssModule.main}>
          <div className='container layout'>{children}
            <Footer/>
        </div></main></body>
    </html>
  );
}
