"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import logo from "../assets/logo.png";

export const Header = ({ searchQuery, setSearchQuery }) => {
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto flex items-center p-3 md:p-4 relative">

                {/* Logo container */}
                <div className="absolute left-4 -bottom-6 z-50 md:relative md:bottom-auto md:left-auto md:z-auto w-16 h-16 md:w-14 md:h-14 bg-white rounded-xl md:rounded-lg shadow-md md:shadow-sm border border-gray-100 flex items-center justify-center p-2 mr-0 md:mr-8">
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

                <div className="w-16 md:hidden"></div>

                {/* Desktop navigation items */}
                <nav className="hidden md:flex items-center gap-8 flex-1">
                    <div className="flex flex-col items-center text-gray-900 cursor-pointer relative">
                        <span className="font-medium">Menu</span>
                        <div className="absolute -bottom-5 w-full h-1 bg-[#DC2626] rounded-t-full"></div>
                    </div>
                    <div className="flex flex-col items-center text-gray-500 hover:text-gray-900 cursor-pointer">
                        <span className="font-medium">Outlet</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500 hover:text-gray-900 cursor-pointer">
                        <span className="font-medium">Account</span>
                    </div>
                </nav>

                {/* Search toggles */}
                <div className="ml-auto flex items-center">
                    
                    {/* Mobile search toggle button */}
                    <button
                        onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        {isMobileSearchOpen ? <X size={24} /> : <Search size={24} />}
                    </button>

                    {/* Desktop search bar */}
                    <div className="hidden md:flex relative items-center">
                        <Search size={18} className="absolute left-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search menu..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-2 w-64 bg-gray-100 border border-transparent focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-full text-sm outline-none transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Expandable mobile search dropdown */}
            {isMobileSearchOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 p-3 shadow-md">
                    <div className="relative flex items-center">
                        <Search size={18} className="absolute left-3 text-gray-400" />
                        <input
                            autoFocus
                            type="text"
                            placeholder="Search menu..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-3 w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-red-500 rounded-lg text-sm outline-none transition-all"
                        />
                    </div>
                </div>
            )}
        </header>
    );
};