import { ThemeProvider } from "./components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNavBar } from "./components/TopNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swwift CV",
  description: "Build your resume quickly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange>
        <TopNavBar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
