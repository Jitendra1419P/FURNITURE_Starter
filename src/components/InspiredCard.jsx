import React from 'react';

const InspiredCard = ({ src, name }) => {
    return (
        <div className="">
            <div
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                className={`w-fill h-[450px] saturate-130 lg:h-[600px] ${
                    !src && 'bg-zinc-300'
                } flex items-center justify-center text-zinc-600 ease-in-out cursor-pointer`}
            >
                {!src && 'Image Placeholder'}
            </div>
            <p className="text-xl lg:text-2xl text-center font-semibold mt-2 mb-2 p-2">
                {name}
            </p>
        </div>
    );
};

export default InspiredCard;
