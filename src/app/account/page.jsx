'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, LogOut, UserCheck } from 'lucide-react'

export default function AccountPage() {
    const router = useRouter()
    const [isGuest, setIsGuest] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === 'guest-token') {
            setIsGuest(true)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('hushLushCart')
        router.replace('/')
    }

    return (
        <main className="w-full max-w-7xl mx-auto flex-1 p-6 md:p-12 pt-8 md:pt-10 pb-28 md:pb-12">
            <Link href="/menu" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#DC2626] mb-6 font-medium transition-colors">
                <ArrowLeft size={18} /> Back to Menu
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">My Account</h1>
            <p className="text-gray-600 mb-8">Manage your profile information, saved addresses, and active orders.</p>
            
            <div className="space-y-6 max-w-2xl">
                {/* Profile Box */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gray-100 text-gray-600 font-bold rounded-full flex items-center justify-center text-lg">
                                {isGuest ? 'G' : 'U'}
                            </div>
                            <div>
                                <h2 className="font-semibold text-gray-800">{isGuest ? 'Guest User' : 'Test User'}</h2>
                                <p className="text-sm text-gray-500">{isGuest ? 'Browsing without an account' : 'test@example.com'}</p>
                            </div>
                        </div>
                        {isGuest && (
                            <Link 
                                href="/" 
                                className="px-4 py-2 bg-[#DC2626] text-white text-xs font-semibold rounded-xl shadow-sm hover:bg-red-700 transition-colors"
                            >
                                Sign In / Register
                            </Link>
                        )}
                    </div>
                </div>

                {/* Session Actions Box */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold text-gray-800">{isGuest ? 'Exit Guest Mode' : 'Session Actions'}</h3>
                        <p className="text-sm text-gray-500">{isGuest ? 'Return to the login screen.' : 'Sign out of your account safely.'}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-50 text-[#DC2626] hover:bg-[#DC2626] hover:text-white rounded-xl font-medium transition-colors text-sm"
                    >
                        <LogOut size={16} /> {isGuest ? 'Exit' : 'Logout'}
                    </button>
                </div>
            </div>
        </main>
    )
}