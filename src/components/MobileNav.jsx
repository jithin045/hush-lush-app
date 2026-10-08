'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Store, Menu as MenuIcon, User, MoreHorizontal, LogOut, X } from 'lucide-react'

export const MobileNav = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [showMoreModal, setShowMoreModal] = useState(false)
    const [toastMessage, setToastMessage] = useState('')

    const showToast = (message) => {
        setToastMessage(message)
        setTimeout(() => setToastMessage(''), 3000)
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('hushLushCart')
        setShowMoreModal(false)
        router.replace('/')
    }

    return (
        <>
            {/* Toast message popup */}
            {toastMessage && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm font-medium">
                    {toastMessage}
                </div>
            )}

            {/* "More" options popup modal */}
            {showMoreModal && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-sm p-6 shadow-2xl relative animate-in fade-in slide-in-from-bottom duration-200">
                        <div className="flex justify-between items-center mb-4 border-b pb-3">
                            <h3 className="font-bold text-gray-900 text-lg">More Options</h3>
                            <button 
                                onClick={() => setShowMoreModal(false)} 
                                className="text-gray-400 hover:text-gray-900"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={() => {
                                    setShowMoreModal(false)
                                    showToast('More features coming soon!')
                                }}
                                className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl font-medium text-gray-700 transition-colors text-sm"
                            >
                                ⚙️ App Settings & Preferences
                            </button>

                            <button
                                onClick={() => {
                                    setShowMoreModal(false)
                                    showToast('Support page coming soon!')
                                }}
                                className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl font-medium text-gray-700 transition-colors text-sm"
                            >
                                💬 Help & Support
                            </button>

                            <hr className="my-2 border-gray-100" />

                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-3 bg-red-50 hover:bg-red-100 rounded-xl font-medium text-[#DC2626] transition-colors text-sm"
                            >
                                <LogOut size={18} /> Logout Account
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Navigation Bar */}
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
                    href="/menu" 
                    className={`flex flex-col items-center gap-1 relative ${pathname === '/menu' ? 'text-gray-900' : 'text-gray-500 hover:text-[#DC2626]'}`}
                >
                    <MenuIcon size={20} />
                    <span className="text-[10px]">Menu</span>
                    {pathname === '/menu' && <div className="absolute -bottom-4 w-8 h-1 bg-[#DC2626] rounded-t-full"></div>}
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
                    onClick={() => setShowMoreModal(true)}
                    className="flex flex-col items-center gap-1 text-gray-500 hover:text-[#DC2626] transition-colors"
                >
                    <MoreHorizontal size={20} />
                    <span className="text-[10px]">More</span>
                </button>
            </nav>
        </>
    )
}