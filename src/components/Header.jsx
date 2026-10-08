"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, X, MoreVertical, LogOut, Settings, HelpCircle, User } from "lucide-react";
import logo from "../assets/logo.png";

export const Header = ({ searchQuery, setSearchQuery }) => {
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const pathname = usePathname();
    const router = useRouter();
    const isMenuPage = pathname === "/";

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDesktopDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('hushLushCart');
        router.replace('/');
    };

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-40">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between p-3 md:p-4 relative">

                {/* Logo container */}
                <div className="relative w-14 h-14 bg-white rounded-xl md:rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-2">
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
                    <Link href="/menu" className={`flex flex-col items-center cursor-pointer relative ${pathname === '/menu' ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'}`}>
                        <span>Menu</span>
                        {pathname === '/menu' && <div className="absolute -bottom-5 w-full h-1 bg-[#DC2626] rounded-t-full"></div>}
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

                {/* Right section: Search (on menu page) + Desktop More/Logout Dropdown */}
                <div className="flex items-center gap-3">
                    {/* Search toggles - ONLY rendered on menu page */}
                    {isMenuPage && (
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
                    )}

                    {/* Desktop "More / Profile" Dropdown Menu */}
                    <div className="relative hidden md:block" ref={dropdownRef}>
                        <button
                            onClick={() => setShowDesktopDropdown(!showDesktopDropdown)}
                            className="p-2.5 rounded-full hover:bg-gray-100 text-gray-600 transition-colors flex items-center justify-center border border-gray-200"
                            title="More options"
                        >
                            <MoreVertical size={20} />
                        </button>

                        {/* Dropdown Box */}
                        {showDesktopDropdown && (
                            <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                                <Link 
                                    href="/account"
                                    onClick={() => setShowDesktopDropdown(false)}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    <User size={16} className="text-gray-400" /> My Account
                                </Link>
                                <button
                                    onClick={() => {
                                        setShowDesktopDropdown(false);
                                        alert("App Settings coming soon!");
                                    }}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                                >
                                    <Settings size={16} className="text-gray-400" /> Settings
                                </button>
                                <button
                                    onClick={() => {
                                        setShowDesktopDropdown(false);
                                        alert("Support page coming soon!");
                                    }}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                                >
                                    <HelpCircle size={16} className="text-gray-400" /> Help & Support
                                </button>

                                <div className="border-t border-gray-100 my-1"></div>

                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#DC2626] hover:bg-red-50 transition-colors text-left font-medium"
                                >
                                    <LogOut size={16} /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile search bar dropdown */}
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