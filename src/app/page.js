'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  ShoppingCart,
  X
} from 'lucide-react'
import { MenuCard } from '../components/MenuCard'
import { PromoCarousel } from '../components/PromoCarousel'

import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData'

export default function Home() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('For You')
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState([])
  const [toastMessage, setToastMessage] = useState('')
  const [itemToAsk, setItemToAsk] = useState(null) // Controls the item confirmation modal

  // Load existing cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('hushLushCart')) || []
    setCart(savedCart)
  }, [])

  // Filter items based on selected category and search input
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'For You' || item.category === activeCategory
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  // Simple toast notification helper
  const showToast = (message) => {
    setToastMessage(message)
    setTimeout(() => setToastMessage(''), 3000)
  }

  // Add selected item to cart from modal and persist to localStorage for the cart page
  const confirmAddToCart = () => {
    if (itemToAsk) {
      const updatedCart = [...cart, itemToAsk]
      setCart(updatedCart)
      localStorage.setItem('hushLushCart', JSON.stringify(updatedCart))
      showToast(`Added ${itemToAsk.name} to cart!`)
      setItemToAsk(null)
    }
  }

  // Handle cart button click: route to /cart if items exist, otherwise show empty toast
  const handleCartClick = () => {
    if (cart.length === 0) {
      showToast('Your cart is empty')
    } else {
      router.push('/cart')
    }
  }

  return (
    <div className="w-full flex-1 flex flex-col items-center relative">
      
      {/* Toast message popup */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm font-medium">
          {toastMessage}
        </div>
      )}

      {/* Confirmation modal when clicking a menu item */}
      {itemToAsk && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl relative">
            <button 
              onClick={() => setItemToAsk(null)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col items-center text-center mt-2">
              <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-gray-50 shadow-md">
                <Image src={itemToAsk.image} alt={itemToAsk.name} fill sizes="112px" className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{itemToAsk.name}</h3>
              <p className="text-[#DC2626] font-bold text-lg mb-8">{itemToAsk.price}</p>
              
              <div className="w-full flex gap-3">
                <button 
                  onClick={() => setItemToAsk(null)} 
                  className="flex-1 py-3.5 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button 
                  onClick={confirmAddToCart} 
                  className="flex-1 py-3.5 rounded-xl font-medium text-white bg-[#DC2626] hover:bg-red-700 shadow-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="w-full max-w-7xl mx-auto flex-1 flex flex-col">
        <PromoCarousel />

        {/* Category filter tabs */}
        <section className="flex overflow-x-auto gap-3 p-4 md:py-8 scrollbar-hide w-full">
          {MENU_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === category
                  ? 'bg-[#DC2626] text-white border-[#DC2626]'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Main food items grid */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 pb-6 mb-12 w-full">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <MenuCard 
                key={item.id} 
                item={item} 
                onClick={() => setItemToAsk(item)} 
              />
            ))
          ) : (
            <div className="col-span-full py-10 text-center text-gray-500">
              No items found matching your search.
            </div>
          )}
        </section>
      </main>

      {/* Floating shopping cart button with item count badge */}
      <button
        onClick={handleCartClick}
        className="fixed bottom-32 right-4 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#9CA3AF] rounded-full flex items-center justify-center text-white shadow-xl z-30 hover:scale-105 transition-transform"
      >
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#DC2626] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  )
}