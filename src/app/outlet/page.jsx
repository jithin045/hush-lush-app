import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function OutletPage() {
    return (
        <main className="w-full max-w-4xl mx-auto flex-1 p-6 md:p-12">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#DC2626] mb-6 font-medium transition-colors">
                <ArrowLeft size={18} /> Back to Menu
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Outlets</h1>
            <p className="text-gray-600 mb-8">Find our restaurant branches, operating hours, and locations near you.</p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Hush Lush - Downtown Flagship</h2>
                <p className="text-sm text-gray-500">123 Culinary Avenue, City Center</p>
                <p className="text-sm text-gray-500">Open Daily: 10:00 AM - 11:00 PM</p>
            </div>
        </main>
    )
}