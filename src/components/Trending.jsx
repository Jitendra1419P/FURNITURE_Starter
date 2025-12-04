import React from 'react';
import ProductCard from './ProductCard';
import ProductCard1 from '../assets/images/ProductCard1.jpg';
import ProductCard2 from '../assets/images/ProductCard2.jpg';
import ProductCard3 from '../assets/images/ProductCard3.jpg';

const Trending = () => {
    return (
        <section className="max-w-7xl mx-auto p-4 sm:p-8 mt-20">
            <div className="relative flex justify-between items-end mb-12">
                {/* TITLE */}
                <h2 className="trxt-6xl lg:text-9xl impact uppercase text-noweap leading-tighter">
                    FOR TRENDING <br /> NOW
                </h2>
                <button className="text-sm lg:text-lg absolute right-0 font-medium border border-zinc-900 text-zinc-900 px-5 lg:px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-900 hover:text-zinc-50 transition-all duration-200 ease-in">
                    See All
                </button>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* ITEM 1 */}
                <div className="col-span-1">
                    <ProductCard
                        src={ProductCard1}
                        price="55,500"
                        position="bottom-4 left-4"
                    />
                </div>
                {/* Item 2 & 3 */}
                <div className="col-span-1 md:col-span-2 flex flex-col space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <ProductCard
                            src={ProductCard2}
                            price="80,000"
                            position="bottom-4 right-4"
                        />
                        <ProductCard
                            src={ProductCard3}
                            price="26,000"
                            position="top-4 right-4"
                        />
                    </div>
                    <div className="pt-6">
                        <h3 className="text-3xl font-extrabold uppercase mb-2">
                            CUTTING-EDGE <br /> FURNITURE TRENDS
                        </h3>
                        <p className="text-base text-zinc-600 max-w-lg">
                            Choosing the right furniture for your home online
                            will add elegance and functionality to your space
                            with comfort and elegance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trending;
