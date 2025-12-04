import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import sofaImage from '/images/sofa.png';
import SocialIcon from './SocialIcon';

const MARQUEE_COPIES = 9;

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white">
            {/* Upper Area: Large Text */}
            <div className="relative max-w-7xl mx-auto p-4 sm:p-8 py-1 lg:py-24 overflow-hidden mb-[20px]">
                {/* Marquee Copies: Dynamic Generared */}

                <div className="flex min-w-full whitespace-nowrap animate-marquee">
                    {Array.from({ length: MARQUEE_COPIES }).map((_, index) => (
                        <p
                            key={index}
                            aria-hidden={index !== 0 ? 'true' : 'false'}
                            className="text-9xl lg:text-[250px] impact font-extrabold leading-none opacity-90 lg:opacity-95 pr-20"
                        >
                            FURNISHINGS
                        </p>
                    ))}
                </div>
                {/* SOFA IMAGE */}
                <img
                    src={sofaImage}
                    alt="sofa_image"
                    className="bottom-0 left-1/2 -translate-x-1/2 w-[250px] lg:w-[400px] mt-10 lg:mt-0 absolute hover:animate-wiggle duration-700 ease-in-out cursor-pointer"
                />
            </div>

            {/* Bottom Area: Copy right & Social Icons */}
            <div className="border-t border-zinc-800 py-6 lg:py-10">
                <div className="max-w-7xl mx-auto p-4 sm:p-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-x-0 text-sm">
                    {/* CopyRight */}
                    <p className="text-zinc-400">
                        <strong>© {new Date().getFullYear()} FURNITURE</strong>.
                        All rights reserved.
                    </p>
                    {/* Social Icons */}
                    <div className="flex space-x-3">
                        <SocialIcon Icon={Instagram} />
                        <SocialIcon Icon={Facebook} />
                        <SocialIcon Icon={Twitter} />
                        <SocialIcon Icon={Linkedin} />
                        <SocialIcon Icon={Youtube} />
                    </div>

                    {/* Design credit */}
                    <p className="text-zinc-400">
                        Design by <strong>Sahil Dobariya</strong>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
