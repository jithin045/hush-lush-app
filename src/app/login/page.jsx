"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LoginForm } from '../../features/auth/LoginForm';
import logo from '../../assets/logo.png';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-50 font-sans">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col p-6 sm:p-10 relative"
            >
                <div className="w-full pt-4 flex flex-col items-center text-center space-y-8">
                    <div className="flex items-center gap-4">
                        <Image 
                            src={logo} 
                            alt="Hush Lush Logo" 
                            width={65} 
                            height={65} 
                            sizes="65px"
                            className="object-contain" 
                            priority 
                        />
                        <div className="w-[1px] h-14 bg-[#DC2626]/40"></div>
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="font-serif text-4xl font-bold text-black leading-none tracking-wide">
                                Hush Lush
                            </h1>
                            <p className="text-[#DC2626] text-[8px] font-bold tracking-[0.2em] mt-1.5 uppercase">
                                Advertising & Technologies
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed px-2">
                        Warely Pass Grants Access to Log in at any of Our Partnered Restaurants.
                    </p>
                </div>

                <div className="w-full flex-1 mt-8">
                    <LoginForm />
                </div>

                <div className="w-full pb-2 pt-8 text-center text-xs text-gray-500 border-t border-gray-100 mt-8">
                    Powered By <span className="text-[#DC2626] font-serif italic text-sm">Hush Lush</span>
                </div>
            </motion.div>
        </div>
    );
}