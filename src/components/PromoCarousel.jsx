"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROMOS } from "../data/promoData";

export const PromoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play banner slides every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % PROMOS.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-48 md:h-72 md:mt-6 md:rounded-2xl overflow-hidden shadow-sm bg-gray-900">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={PROMOS[currentIndex].image}
                        alt={PROMOS[currentIndex].title}
                        fill
                        sizes="100vw"
                        className="object-cover brightness-75"
                        priority={currentIndex === 0}
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                        <h2 className="font-script text-4xl md:text-6xl mb-2 tracking-wide">
                            {PROMOS[currentIndex].title}
                        </h2>
                        <p className="text-sm md:text-lg font-medium text-gray-200">
                            {PROMOS[currentIndex].subtitle}
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Interactive slide indicator dots */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                {PROMOS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 rounded-full ${
                            currentIndex === index
                                ? "w-4 md:w-6 h-2 md:h-3 bg-white"
                                : "w-2 md:w-3 h-2 md:h-3 bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};