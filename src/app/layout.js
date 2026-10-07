import './globals.css'

export const metadata = {
  title: 'Hush Lush Restaurant',
  description: 'Restaurant menu and ordering application'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' className='h-full antialiased'>
      <body className='min-h-full flex flex-col font-sans bg-gray-50 text-gray-900 selection:bg-red-100'>
        <div className='w-full min-h-screen flex flex-col'>{children}</div>
      </body>
    </html>
  )
}
