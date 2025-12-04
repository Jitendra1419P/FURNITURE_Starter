import React from 'react';

const HeroImage = ({ src }) => {
    return (
        <div className="lg:absolute overflow-clip right-0 lg:w-1/2 mt-10 lg:mt-0">
            <div
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
                className="aspect-video saturate-120 lg:h-[250px] w-full bg-zinc-200 flex items-center justify-center text-zinc-500 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
            >
                {src ? (
                    ''
                ) : (
                    <span className="text-lg">Hero Image Placeholder</span>
                )}
            </div>
        </div>
    );
};

export default HeroImage;
