import { Crimson_Pro, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
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
      className={`${crimsonPro.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-background text-foreground border-b border-line">
          <nav className="flex items-center h-12 px-6">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Sleight
            </Link>
            <div className="flex items-center gap-4 ml-10 text-lg font-light text-muted">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <Link
                href="/sleights"
                className="hover:text-foreground transition-colors"
              >
                Sleights
              </Link>
              <Link
                href="/notes"
                className="hover:text-foreground transition-colors"
              >
                Notes
              </Link>
              <Link
                href="/settings"
                className="hover:text-foreground transition-colors"
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
