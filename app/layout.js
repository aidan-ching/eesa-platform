import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import SideNav from '@/app/ui/sidenav';
import Header from '@/app/ui/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EESA Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex flex-col w-full h-full">
            <Header className="w-full"/>
            <Providers>{children}</Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
