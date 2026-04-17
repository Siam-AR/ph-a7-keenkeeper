import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6">
        <div className="text-center max-w-md">
          {/* 404 Title */}
          <h1 className="text-7xl font-extrabold tracking-tight text-white/90">
            404
          </h1>

          {/* Subtitle */}
          <h2 className="mt-4 text-2xl font-semibold text-white/80">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>

          {/* Home Button */}
          <a
            href="/"
            className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition"
          >
            Go Back Home
          </a>

          {/* Decorative line */}
          <div className="mt-10 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />
        </div>
      </body>
    </html>
  );
}