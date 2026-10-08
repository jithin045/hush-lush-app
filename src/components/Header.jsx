"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, X } from "lucide-react";
import logo from "../assets/logo.png";

export const Header = ({ searchQuery, setSearchQuery }) => {
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const pathname = usePathname();
    const isMenuPage = pathname === "/";

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-40">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between p-3 md:p-4 relative">

                {/* Logo container - adjusted mobile positioning so it doesn't clip */}
                <div className="relative md:relative w-14 h-14 md:w-14 md:h-14 bg-white rounded-xl md:rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-2">
                    <Image 
                        src={logo} 
                        alt="Hush Lush Logo" 
                        width={60} 
                        height={60} 
                        sizes="60px"
                        className="object-contain" 
                        priority 
                    />
                </div>

                {/* Desktop navigation items */}
                <nav className="hidden md:flex items-center gap-8 flex-1 ml-8">
                    <Link href="/" className={`flex flex-col items-center cursor-pointer relative ${pathname === '/' ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'}`}>
                        <span>Menu</span>
                        {pathname === '/' && <div className="absolute -bottom-5 w-full h-1 bg-[#DC2626] rounded-t-full"></div>}
                    </Link>
                    <Link href="/outlet" className={`flex flex-col items-center cursor-pointer relative ${pathname === '/outlet' ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'}`}>
                        <span>Outlet</span>
                        {pathname === '/outlet' && <div className="absolute -bottom-5 w-full h-1 bg-[#DC2626] rounded-t-full"></div>}
                    </Link>
                    <Link href="/account" className={`flex flex-col items-center cursor-pointer relative ${pathname === '/account' ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'}`}>
                        <span>Account</span>
                        {pathname === '/account' && <div className="absolute -bottom-5 w-full h-1 bg-[#DC2626] rounded-t-full"></div>}
                    </Link>
                </nav>

                {/* Search toggles - ONLY rendered on menu page */}
                {isMenuPage ? (
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            {isMobileSearchOpen ? <X size={24} /> : <Search size={24} />}
                        </button>

                        <div className="hidden md:flex relative items-center">
                            <Search size={18} className="absolute left-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search menu..."
                                value={searchQuery || ""}
                                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 w-64 bg-gray-100 border border-transparent focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-full text-sm outline-none transition-all"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="md:hidden flex items-center">
                        {/* Empty placeholder to keep layout balanced on mobile inner pages */}
                    </div>
                )}
            </div>

            {isMenuPage && isMobileSearchOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 p-3 shadow-md">
                    <div className="relative flex items-center">
                        <Search size={18} className="absolute left-3 text-gray-400" />
                        <input
                            autoFocus
                            type="text"
                            placeholder="Search menu..."
                            value={searchQuery || ""}
                            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-3 w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-red-500 rounded-lg text-sm outline-none transition-all"
                        />
                    </div>
                </div>
            )}
        </header>
    );
};