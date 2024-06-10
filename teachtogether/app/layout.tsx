import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import StyledTitleBar from "../components/StyledTitleBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teach Together",
  description: "Generated by create next app",
};


const navLinks = [
  {name: "Home", href: "/"},
  {name: "Auth", href: "/login"},
  {name: "Lessons", href: "/lessons"},
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor:'D9D9D9'}}>
      <header>
        <StyledTitleBar />

        <nav style={{backgroundColor:"gray"}}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <br />
        {children}
      </body>
    </html>
  );
}