'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react'

export default function CartPage() {
    const [cartItems, setCartItems] = useState([])
    const [orderPlaced, setOrderPlaced] = useState(false)

    // Load cart items from localStorage or state management if persisted, 
    // or simulate cart data for demonstration. 
    useEffect(() => {
        // For local storage implementation or mock fallback
        const savedCart = JSON.parse(localStorage.getItem('hushLushCart')) || [
            // Sample placeholder item if cart is empty on direct navigation
        ]
        setCartItems(savedCart)
    }, [])

    const updateQuantity = (id, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = (item.quantity || 1) + delta
                return newQty > 0 ? { ...item, quantity: newQty } : null
            }
            return item
        }).filter(Boolean))
    }

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => {
            const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0
            return acc + priceNum * (item.quantity || 1)
        }, 0).toFixed(2)
    }

    const handleCheckout = () => {
        setOrderPlaced(true)
        localStorage.removeItem('hushLushCart')
    }

    if (orderPlaced) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4">
                    ✓
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
                <p className="text-gray-600 mb-6">Thank you for ordering with Hush Lush. Your food is on its way.</p>
                <Link href="/" className="px-6 py-3 bg-[#DC2626] text-white rounded-xl font-medium shadow-md hover:bg-red-700 transition-colors">
                    Back to Menu
                </Link>
            </div>
        )
    }

    return (
        <main className="w-full max-w-4xl mx-auto flex-1 p-4 md:p-12 mb-20">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#DC2626] mb-6 font-medium transition-colors">
                <ArrowLeft size={18} /> Back to Menu
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <ShoppingBag className="text-[#DC2626]" /> Your Cart
            </h1>

            {cartItems.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
                    <p className="text-gray-500 mb-4">Your cart is currently empty.</p>
                    <Link href="/" className="inline-block px-6 py-3 bg-[#DC2626] text-white rounded-xl font-medium shadow-md hover:bg-red-700 transition-colors">
                        Explore Menu
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Cart Items List */}
                    <div className="md:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between gap-4">
                                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                    <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-950">{item.name}</h3>
                                    <p className="text-[#DC2626] font-semibold">{item.price}</p>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500 hover:text-gray-900">
                                        <Minus size={16} />
                                    </button>
                                    <span className="font-semibold text-sm w-4 text-center">{item.quantity || 1}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-500 hover:text-gray-900">
                                        <Plus size={16} />
                                    </button>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-600 p-2">
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary Box */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit space-y-4">
                        <h2 className="text-lg font-bold text-gray-900 border-b pb-3">Order Summary</h2>
                        <div className="flex justify-between text-gray-600 text-sm">
                            <span>Subtotal</span>
                            <span>${calculateTotal()}</span>
                        </div>
                        <div className="flex justify-between text-gray-600 text-sm">
                            <span>Delivery Fee</span>
                            <span>$5.00</span>
                        </div>
                        <div className="flex justify-between text-gray-900 font-bold text-base border-t pt-3">
                            <span>Total</span>
                            <span className="text-[#DC2626]">${(parseFloat(calculateTotal()) + 5).toFixed(2)}</span>
                        </div>
                        <button 
                            onClick={handleCheckout}
                            className="w-full py-3.5 bg-[#DC2626] text-white rounded-xl font-medium shadow-md hover:bg-red-700 transition-colors mt-4"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </main>
    )
}