import type { Metadata } from "next";
import Script from "next/script";
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
        {/* Google tag (gtag.js) — Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18248954992"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18248954992');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
