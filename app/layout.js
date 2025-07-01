import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/component/ClientLayout";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jaharuddin | MERN Stack Developer Portfolio",
  description: "Welcome to Jaharuddin's portfolio. A MERN Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js. Explore projects, skills, and contact details.",
  keywords: ["Jaharuddin", "MERN Developer", "Portfolio", "MongoDB", "Express", "React", "Node", "JavaScript"],
  authors: [{ name: "Jaharuddin", url: "https://your-portfolio-link.com" }],
  icons: {
    icon: "/favicon.ico", // or "/favicon.png"
  },
  creator: "Jaharuddin",
  metadataBase: new URL("https://jaharuddinportfolio-one.vercel.app/"), // optional
  openGraph: {
    title: "Jaharuddin | MERN Stack Developer",
    description: "Explore Jaharuddin's portfolio projects, skills, and contact information.",
    url: "https://jaharuddinportfolio-one.vercel.app/",
    siteName: "Jaharuddin Portfolio",
    images: [
      {
        url: "/profile.svg", // Add your image in public/ directory
        width: 1200,
        height: 630,
        alt: "Jaharuddin Portfolio",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>

         <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
