import { useState } from "react";
import { popularBrands, popularProducts } from "../utils/constant";
import zicZacImage from '../assets/product/zic-zack.png';

export default function PopularBrands() {
    const [selectedBrand, setSelectedBrand] = useState("Bitmain");

    const filteredProducts = popularProducts.filter(
        (product) => product.brand === selectedBrand
    );

    return (
        <section className="p-6 bg-[#0B0F1C] text-white">
            {/* Heading */}
            <div className="flex flex-col gap-3 items-center justify-center py-10">
                <h1 className="text-3xl sm:text-4xl text-center font-semibold">Popular Brands</h1>
                <img src={zicZacImage} alt="underline-image" className="w-32 sm:w-auto" />
            </div>

            {/* Brands Tabs */}
            <div className="flex flex-wrap gap-4 mb-6 border-b border-gray-700 pb-2 justify-center">
                {popularBrands.map((brand) => (
                    <button
                        key={brand}
                        onClick={() => setSelectedBrand(brand)}
                        className={`${selectedBrand === brand
                            ? "text-blue-400 border-b-2 border-blue-500"
                            : "text-gray-400"
                            } hover:text-white transition`}
                    >
                        {brand}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white text-black rounded-lg p-5 relative flex flex-col sm:flex-row items-center gap-4"
                    >
                        {product.soldOut && (
                            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                                SOLD OUT
                            </span>
                        )}
                        {/* Image */}
                        <div className="h-32 w-32 flex-shrink-0">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-full object-cover mb-2 sm:mb-0"
                            />
                        </div>
                        {/* Text */}
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                            <h3 className="font-semibold mb-2">{product.title}</h3>
                            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded">
                                US${product.price.toFixed(2)}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
