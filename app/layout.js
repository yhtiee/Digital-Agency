'use client'
import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { AuthContextProvider } from "./context/AuthContext";


const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Digital Wakaa",
//   description: "Digital Agency Platform",
// };

export default function RootLayout({ children }) {

  return (
   

   
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
      <AuthContextProvider>
      <NavBar />
          {children}
    
      </AuthContextProvider>
        
        <Footer />
      </body>
    </html>
   
  );
}
