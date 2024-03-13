import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Layout/footer";
import layoutCssModule from "./Layout/layout.module.css";
import SideBar from "./Layout/SideBar";

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
      <body>
        <main className={layoutCssModule.main}>
          <SideBar/>
            <div className='container layout'>{children}
            <Footer/>
        </div>
      </main>
    </body>
    </html>
  );
}
