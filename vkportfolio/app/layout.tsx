import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/src/shared/components/themeprovider/themeprovider";
import {decriptionContent,keywords} from "../src/shared/contents/description"

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishwakanth Portfolio",
  description: decriptionContent,
  keywords: keywords.join(","),
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple_touch_icon.png?v=4"],
    shortcut: ["/apple_touch_icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
