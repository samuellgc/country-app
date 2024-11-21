import type { Metadata } from "next";
import localFont from "next/font/local";
import "../shared/assets/css/globals.css";

const geistSans = localFont({
  src: "../shared/assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../shared/assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Country App",
  description: "Discover more about the world's countries!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="py-3 px-6 min-h-20 bg-sky-500 flex items-center">
          <h1 className="text-xl font-bold text-white">Country App</h1>
        </header>
        <main className="w-full h-full bg-gray-50 p-3">{children}</main>
      </body>
    </html>
  );
}
