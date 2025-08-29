import NextTopLoader from "nextjs-toploader";
import {Inter}  from "next/font/google";
import "./globals.css";

const inter = Inter({

  subsets: ["latin"],
});



export const metadata = {
  title: "Cinescope Movies",
  description: "find your favourite movie ratings and recommendation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#1dd1a1" speed={400} crawlSpeed={400}/>
        {children}</body>

    </html>
  );
}

