import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lay's Gourmet | Yogurt & Herb - Limited Chef Edition",
  description: "Experience luxury in every bite. The sophisticated fusion of rich Greek Yogurt and hand-picked aromatic Mediterranean herbs.",
  keywords: ["Lay's Gourmet", "Yogurt & Herb", "Luxury Potato Chips", "Chef Edition", "Gourmet Snacks"],
  openGraph: {
    title: "Lay's Gourmet | Yogurt & Herb",
    description: "Luxury In Every Bite - Limited Chef Edition",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#06080d] text-slate-100 antialiased selection:bg-gold-500/30 selection:text-gold-200">
        {children}
      </body>
    </html>
  );
}
