'use client'

import './globals.css'
import { usePathname } from 'next/navigation'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MobileNav } from '../components/MobileNav'

export default function RootLayout ({ children }) {
  const pathname = usePathname()
  
  // Check if the user is currently on the login page
  const isLoginPage = pathname === '/'

  return (
    <html lang='en' className='h-full antialiased'>
      <body className='min-h-full flex flex-col font-sans bg-gray-50 text-gray-900 selection:bg-red-100'>
        {/* Render Header only if not on the login page */}
        {!isLoginPage && <Header />}

        <div className={`w-full flex-1 flex flex-col ${!isLoginPage ? 'pb-28 md:pb-0' : ''}`}>
          {children}
        </div>

        {/* Render Footer and MobileNav only if not on the login page */}
        {!isLoginPage && <Footer />}
        {!isLoginPage && <MobileNav />}
      </body>
    </html>
  )
}