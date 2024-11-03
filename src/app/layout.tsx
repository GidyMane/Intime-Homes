import type { Metadata } from "next"; 
import localFont from "next/font/local";
import "./globals.css";
import { Roboto, Lato } from "next/font/google"; // Import Google Font

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Import the Lato font from Google Fonts
const lato = Lato({
  weight: ["100", "400", "700", "900"], // Adjust weights as needed
  subsets: ["latin"], // Specify subsets
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Link to Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${lato.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}