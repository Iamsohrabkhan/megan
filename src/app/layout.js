import {  Lora ,Instrument_Sans,Work_Sans} from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/ui/Theme/theme-provider'
import Navbar from '@/components/ui/Navbar/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

const lora = Lora({ subsets: ['latin'] })
const work_Sans = Lora({ subsets: ['latin'] })
const cyrene = localFont({ src: './/Cyrene.otf' })
export const metadata = {
  title: 'Megan',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_Sans.className}>
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
