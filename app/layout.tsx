




import "./globals.css";

import type { Metadata } from "next";





export const metadata: Metadata = {
  title: " Curious Prosper",
  description: "Learning to build",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;


}>)


{
  return (
    <html lang="en">
      <body>

      
        {children}

        
      </body>
    </html>
  );
}
