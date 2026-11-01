import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import { BookingProvider } from "@/context/BookingContext";

export const metadata = {
  title: "StudyHive – Library & Reading Space | Mohanlalganj, Lucknow",
  description:
    "An editorial, quiet sanctuary designed for deep cognitive concentration, competitive exam preparations (UPSC, NEET, CA), and timeless scholarly focus in Mohanlalganj, Lucknow.",
  keywords: [
    "library lucknow",
    "reading room mohanlalganj",
    "study space lucknow",
    "studyhive",
    "upsc library lucknow",
    "private cubicles study",
  ],
  authors: [{ name: "StudyHive" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#fdf9f1] text-[#1c1c17] antialiased min-h-screen flex flex-col font-sans">
        <BookingProvider>
          <Navbar />
          <main className="flex-1 w-full pt-20">{children}</main>
          <Footer />
          <Toast />
        </BookingProvider>
      </body>
    </html>
  );
}
