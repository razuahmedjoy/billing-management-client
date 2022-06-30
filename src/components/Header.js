import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {

 
    return (
        <>
            <header className="h-[80px] md:h-[80px] border-b border-gray-200 px-5 md:px-10 lg:px-32 py-1 md:py-2 flex justify-between items-center">
                <div className="brand-logo w-fit p-1 md:p-2">
                    <NavLink to="/" className="text-xl font-semibold">Logo</NavLink>
                </div>
                <div className="navigation">
                    <ul className="flex gap-x-8 md:text-md lg:text-lg font-poppin">
                        <li>
                           <button className="py-1 px-3 rounded-full bg-primary text-white">Paid Total : 200</button>

                        </li>
                 
                    </ul>
                </div>

            

            </header>
        

        </>
    );
};

export default Header;