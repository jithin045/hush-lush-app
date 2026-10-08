import './globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MobileNav } from '../components/MobileNav'

export const metadata = {
  title: 'Hush Lush Restaurant',
  description: 'Restaurant menu and ordering application'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' className='h-full antialiased'>
      <body className='min-h-full flex flex-col font-sans bg-gray-50 text-gray-900 selection:bg-red-100'>
        <Header />
        <div className='w-full flex-1 flex flex-col pb-28 md:pb-0'>{children}</div>
        <Footer />
        <MobileNav />
      </body>
    </html>
  )
}