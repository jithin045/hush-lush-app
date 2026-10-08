'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Store, Menu as MenuIcon, User, MoreHorizontal } from 'lucide-react'

export const MobileNav = () => {
    const pathname = usePathname()
    const [toastMessage, setToastMessage] = useState('')

    const showToast = (message) => {
        setToastMessage(message)
        setTimeout(() => setToastMessage(''), 3000)
    }

    return (
        <>
            {/* Toast message popup for mobile navigation */}
            {toastMessage && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm font-medium">
                    {toastMessage}
                </div>
            )}

            <nav className="md:hidden fixed bottom-10 left-4 right-4 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex justify-between px-6 py-4 z-40">
                <Link 
                    href="/outlet" 
                    className={`flex flex-col items-center gap-1 relative ${pathname === '/outlet' ? 'text-gray-900' : 'text-gray-500 hover:text-[#DC2626]'}`}
                >
                    <Store size={20} />
                    <span className="text-[10px]">Outlet</span>
                    {pathname === '/outlet' && <div className="absolute -bottom-4 w-8 h-1 bg-[#DC2626] rounded-t-full"></div>}
                </Link>

                <Link 
                    href="/" 
                    className={`flex flex-col items-center gap-1 relative ${pathname === '/' ? 'text-gray-900' : 'text-gray-500 hover:text-[#DC2626]'}`}
                >
                    <MenuIcon size={20} />
                    <span className="text-[10px]">Menu</span>
                    {pathname === '/' && <div className="absolute -bottom-4 w-8 h-1 bg-[#DC2626] rounded-t-full"></div>}
                </Link>

                <Link 
                    href="/account" 
                    className={`flex flex-col items-center gap-1 relative ${pathname === '/account' ? 'text-gray-900' : 'text-gray-500 hover:text-[#DC2626]'}`}
                >
                    <User size={20} />
                    <span className="text-[10px]">Account</span>
                    {pathname === '/account' && <div className="absolute -bottom-4 w-8 h-1 bg-[#DC2626] rounded-t-full"></div>}
                </Link>

                <button 
                    onClick={() => showToast('More features are coming soon!')}
                    className="flex flex-col items-center gap-1 text-gray-500 hover:text-[#DC2626] transition-colors"
                >
                    <MoreHorizontal size={20} />
                    <span className="text-[10px]">More</span>
                </button>
            </nav>
        </>
    )
}