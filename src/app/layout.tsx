import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

export const metadata: Metadata = {
  title: "Ravindran Dharshan",
  description: "Welcome to my personal portfolio, showcasing my projects, skills, and achievements as a Full Stack Developer.",
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
      {/*<Navbar />*/}
        {children}
      {/*<Footer />*/}
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import Head from 'next/head';
// import "./globals.css";
//
// // Import custom fonts
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
//
// // Define SEO metadata
// export const metadata: Metadata = {
//   title: "Ravindran Dharshan - Personal Portfolio", // Page title
//   description: "Showcasing the projects, skills, and achievements of Ravindran Dharshan. Explore my work and get to know more about my professional journey.", // Description for search engines
// };
//
// export default function RootLayout({
//                                      children,
//                                    }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//       <html lang="en">
//       <Head>
//         {/* Favicon */}
//         <link rel="icon" href="/favicon.ico" />
//
//         {/* Theme color for mobile browsers */}
//         <meta name="theme-color" content="#000000" />
//
//         {/* Viewport settings for responsive design */}
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//
//         {/* Canonical URL */}
//         <link rel="canonical" href="https://your-portfolio-url.com" />
//
//         {/* Open Graph metadata for social media previews (including LinkedIn) */}
//         <meta property="og:title" content="Ravindran Dharshan - Personal Portfolio" />
//         <meta property="og:description" content="Showcasing the projects, skills, and achievements of Ravindran Dharshan. Explore my work and get to know more about my professional journey." />
//         <meta property="og:image" content="/images/og-image.jpg" /> {/* Path to the Open Graph image */}
//         <meta property="og:url" content="https://your-portfolio-url.com" /> {/* URL of your portfolio */}
//         <meta property="og:type" content="website" /> {/* Type of content */}
//
//         {/* Twitter Card metadata for Twitter previews */}
//         <meta name="twitter:card" content="summary_large_image" /> {/* Card type */}
//         <meta name="twitter:title" content="Ravindran Dharshan - Personal Portfolio" />
//         <meta name="twitter:description" content="Showcasing the projects, skills, and achievements of Ravindran Dharshan. Explore my work and get to know more about my professional journey." />
//         <meta name="twitter:image" content="/images/twitter-image.jpg" /> {/* Path to the Twitter Card image */}
//
//         {/* Keywords Meta Tag */}
//         <meta name="keywords" content="Ravindran Dharshan, personal portfolio, web developer, software engineer, technology, projects, skills, achievements, professional journey" /> {/* Relevant keywords */}
//
//         {/* Author Meta Tag */}
//         <meta name="author" content="Ravindran Dharshan" /> {/* Name of the author */}
//       </Head>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//       {children}
//       </body>
//       </html>
//   );
// }
