import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/src/shared/components/themeprovider/themeprovider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishwakanth Portfolio",
  description: "Hi this is vishwakanth here",
  keywords:
    "Vishwakanth, Vishwakanth.S,Vishwakanth Portfolio,VK portfolio,Vishwa portfolio,Vishwa,figma,photoshop,react-native,resume",
  icons: {
    icon: ["/favicon.png?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
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
