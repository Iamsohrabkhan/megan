import {  Lora } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/ui/Theme/theme-provider'
import Navbar from '@/components/ui/Navbar/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

const lora = Lora({ subsets: ['latin'] })
export const metadata = {
  title: "Megan Lacefield",
  description: "Ever wondered what fuels an entrepreneur inspiration? Here the inside scoop! Dive into my world of tried-and-true favorites—my wellness and beauty essentials, go-to tech, and seamless life and business tools. Peek into my (admittedly chaotic) closet for the staples I can nott do without. Seeking a simpler, decluttered, and more effective life? You will adore what resonates with me.",

    twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://meganlacefield.vercel.app/"),
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-y-hidden ${lora.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        
        >
        <Navbar/>
        {children}
        <Footer/>
        <Toaster />
        </ThemeProvider>
        </body>
    </html>
  )
}
