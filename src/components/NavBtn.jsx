import React from 'react';

const NavBtn = ({ children, active = false }) => {
    return (
        <a
            href="#"
            className={`text-sm hover:font-bold transition-all duration-150 ease-in hover:-translate-y-1 hover:border-zinc-400 uppercase tracking-wide border p-2 px-4 rounded-full hover:text-zinc-900 ${
                active
                    ? 'border-zinc-400 font-bold text-zinc-900'
                    : 'border-transparent text-zinc-600'
            }`}
        >
            {children}
        </a>
    );
};

export default NavBtn;
