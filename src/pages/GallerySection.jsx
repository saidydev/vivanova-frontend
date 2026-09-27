import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// Data iliyowekwa moja kwa moja (Hardcoded items)
const SUPPLY_ITEMS = [
    {
        id: 1,
        category: "Hardware",
        title: "General Hardware & Fasteners",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1000&q=85",
        size: "large"
    },
    {
        id: 2,
        category: "Electrical",
        title: "Electrical Supplies & Lighting",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=85",
        size: "small"
    },
    {
        id: 3,
        category: "Equipment",
        title: "Tools & Equipment",
        image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&q=85",
        size: "small"
    },
    {
        id: 4,
        category: "Household",
        title: "Household Supplies",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1000&q=85",
        size: "wide"
    },
    {
        id: 5,
        category: "Safety PPE",
        title: "Safety & Protective Gear",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=85",
        size: "medium"
    },
];

export default function AchievementGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="products" className="py-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-5">
                    <h2
                        className="text-4xl md:text-5xl font-black uppercase leading-tight"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                        OUR PRODUCT<br />
                        <span className="text-[#a91609]">PORTFOLIO</span>
                    </h2>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {SUPPLY_ITEMS.map((item, index) => {
                        let spanClass = "";
                        if (item.size === "large") spanClass = "lg:col-span-1 lg:row-span-2 min-h-[460px]";
                        else if (item.size === "wide") spanClass = "md:col-span-2 lg:col-span-2 min-h-[280px]";
                        else spanClass = "min-h-[280px]";

                        return (
                            <div
                                key={item.id}
                                onClick={() => setSelectedImage(item)}
                                className={`group relative overflow-hidden rounded-xs cursor-pointer bg-slate-800  hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col justify-between ${ spanClass }`}
                            >
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                                {/* Top Badge & Zoom Icon */}
                                <div className="relative z-10 p-5 flex items-center justify-between">
                                    <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                                        {item.category}
                                    </span>

                                    <div className="w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ZoomIn className="w-4 h-4 text-blue-400" />
                                    </div>
                                </div>

                                {/* Bottom Content */}
                                <div className="relative z-10 p-6">
                                    <span className="text-blue-400 font-bold text-xs">0{index + 1}</span>
                                    <h3 className="text-xl font-bold text-white mt-0.5 group-hover:text-blue-300 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>


            </div>

            {/* LIGHTBOX MODAL (ZOOM IMAGE ONLY) */}
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-red-600 transition"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Zoomed Content */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
                    >
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-slate-800"
                        />
                        <div className="mt-4 text-center">
                            <span className="text-red-500 font-bold text-xs uppercase tracking-widest">{selectedImage.category}</span>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{selectedImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}