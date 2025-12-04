import React from 'react';
import BigImage from './BigImage';
import SmallImage from './SmallImage';
import BigImage1 from '../assets/images/BigImage1.jpg';
import BigImage2 from '../assets/images/BigImage2.jpg';
import BigImage3 from '../assets/images/BigImage3.jpg';

const NewArrival = () => {
    return (
        <section className="max-w-7xl mx-auto p-4 sm:p-6 mt-20">
            {/* Title */}
            <h2 className="text-6xl lg:text-9xl impact uppercase leading-tight mb-12">
                NEW ARRIVAL
            </h2>
            {/* Grid */}
            <div className="grid lg:grid-cols-4 gap-8">
                {/* Featured Large Image */}
                <div className="lg:col-span-2">
                    <div className="flex flex-col-reverse card-hover">
                        {/* Image Placeholder */}
                        <BigImage src={BigImage1} />
                        {/* Text Content */}
                        <div className="mt-6 md:mt-0 pt-4 flex justify-between">
                            <div>
                                <p className="text-lg uppercase font-bold text-zinc-600">
                                    The Finest Collecton
                                </p>
                                <h3 className="text-lg font-bold mb-4">
                                    Options, Starting
                                </h3>
                            </div>
                            <div>
                                <p className="text-xl font-extrabold mb-1 text-right">
                                    ₹ 1000
                                </p>
                                <p className="text-sm text-zinc-500">
                                    10+ Variants
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Small Images 1*/}
                <div className="lg:col-span-2 flex flex-col lg:flex-row space-y-6 lg:gap-10">
                    {/* Small Card 1 */}
                    <div className="flex flex-col lg:w-1/2 card-hover">
                        {/* Image Placeholder */}
                        <SmallImage src={BigImage2} />

                        {/* Text Details */}

                        <div className="w-full flex justify-between pt-2 ">
                            <div>
                                <h4 className="text-xl uppercase font-bold">
                                    Coffee Table
                                </h4>
                                <p className="text-base text-zinc-600 mb-1">
                                    Starting
                                </p>
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-right">
                                    ₹ 350
                                </p>
                                <p className="text-base text-zinc-500">
                                    20+ Variants
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Small Card 2*/}
                    <div className="flex flex-col lg:w-1/2 lg:mt-50 card-hover">
                        {/* Image Placeholder */}
                        <SmallImage src={BigImage3} />

                        {/* Text Details */}

                        <div className="w-full flex justify-between pt-2 ">
                            <div>
                                <h4 className="text-xl uppercase font-bold">
                                    Valvet Chair
                                </h4>
                                <p className="text-base text-zinc-600 mb-1">
                                    Starting
                                </p>
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-right">
                                    ₹ 420
                                </p>
                                <p className="text-base text-zinc-500">
                                    30+ Variants
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Explore Button */}
            <div className="flex justify-center mt-12 lg:mt-15">
                <button className="text-base lg:text-lg font-medium border border-zinc-900 text-zinc-900 px-6 lg:px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-900 hover:text-zinc-100 transition-all ease-in duration-200 hover:animate-wiggle">
                    Explore
                </button>
            </div>
        </section>
    );
};

export default NewArrival;
