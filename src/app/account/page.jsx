import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AccountPage() {
    return (
        <main className="w-full max-w-7xl mx-auto flex-1 p-6 md:p-12 pt-8 md:pt-10 pb-28 md:pb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#DC2626] mb-6 font-medium transition-colors">
                <ArrowLeft size={18} /> Back to Menu
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">My Account</h1>
            <p className="text-gray-600 mb-8">Manage your profile information, saved addresses, and active orders.</p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4 max-w-2xl">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 text-red-600 font-bold rounded-full flex items-center justify-center text-lg">
                        U
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-800">Test User</h2>
                        <p className="text-sm text-gray-500">test@example.com</p>
                    </div>
                </div>
            </div>
        </main>
    )
}