import Image from "next/image";
import { Plus, ArrowRight } from "lucide-react";

export const MenuCard = ({ item, onClick }) => {
    return (
        <div
            className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white hover:shadow-md transition-all cursor-pointer group"
            onClick={onClick}
        >
            {/* Card image and action button container */}
            <div className="relative h-40 md:h-48 w-full overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <button className="absolute bottom-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors">
                    <Plus size={18} />
                </button>
            </div>

            {/* Card details and pricing section */}
            <div className="p-4 flex flex-col flex-1 justify-between">
                <h3 className="text-sm md:text-base font-medium text-gray-800 leading-tight mb-3">
                    {item.name}
                </h3>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#DC2626] font-bold text-base md:text-lg">{item.price}</span>
                    <ArrowRight size={18} className="text-[#DC2626]" />
                </div>
            </div>
        </div>
    );
};