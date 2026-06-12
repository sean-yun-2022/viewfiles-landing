import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  verification: {
    google: "FRKzqMoq9vUtpdc5skClzfVc57WcqAnAFyJ0Qeo5_wA",
  },
  title: "View Files — Universal File Viewer for Mac & Windows",
  description: "Open PDF, Word, Excel, PPT, Markdown, and more without switching apps. AI-powered knowledge management built in.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "View Files — Universal File Viewer for Mac & Windows",
    description: "Open PDF, Word, Excel, PPT, Markdown, and more without switching apps.",
    url: "https://viewfiles.app",
    siteName: "View Files",
    type: "website",
    images: [{ url: "/icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#08080f] text-[#e8eaf0]">
        {children}
      </body>
    </html>
  );
}
