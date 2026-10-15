import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Lay's Gourmet | Yogurt & Herb — Chef Reserve Edition",
  description: "An extraordinary scrollytelling culinary journey into Lay's Gourmet Yogurt & Herb. Thin-cut select russet potatoes, slow-kettle fried and infused with Mediterranean Greek yogurt and fresh garden dill.",
  keywords: ["Lay's Gourmet", "Yogurt & Herb", "Potato Chips", "Kettle Fried", "Chef Reserve", "Scrollytelling"],
  authors: [{ name: "Lay's Gourmet Culinary Lab" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${cinzel.variable} bg-black text-white antialiased selection:bg-brand-green/30 selection:text-cream-500`}
    >
      <body className="bg-black min-h-screen font-sans overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
