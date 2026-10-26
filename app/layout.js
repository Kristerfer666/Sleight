import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sleight",
  description: "A learning platform for card and coin magic",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-zinc-950 text-zinc-100 border-b border-zinc-800">
          <nav className="flex items-center h-12 px-6">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Sleight
            </Link>
            <div className="flex items-center gap-4 ml-10 text-sm font-light text-zinc-400">
              <Link href="/" className="hover:text-zinc-100 transition-colors">
                Home
              </Link>
              <Link
                href="/sleights"
                className="hover:text-zinc-100 transition-colors"
              >
                Sleights
              </Link>
              <Link
                href="/notes"
                className="hover:text-zinc-100 transition-colors"
              >
                Notes
              </Link>
              <Link
                href="/settings"
                className="hover:text-zinc-100 transition-colors"
              >
                Settings
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
