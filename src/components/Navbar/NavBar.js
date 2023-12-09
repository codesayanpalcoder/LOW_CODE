import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuLine } from 'react-icons/ri';
import NavLinks from '../Navbar/NavLinks';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 bg-blue-900`}>
            <div className="flex flex-row justify-between items-center py-2">
                <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <Link to="/">
                        <h1 className="font-extrabold text-4xl text-white hover:text-green-500">Low Code</h1>
                    </Link>
                </div>
                <div className="group flex flex-col items-center">
                    {/* Navigation menu button for small and medium screens */}
                    <button
                        className="p-2 rounded-lg lg:hidden text-white" // Update button color to white
                        onClick={handleClick}
                    >
                        <RiMenuLine size={24} />
                    </button>

                    {/* Nav links for larger screens */}
                    <div className='hidden space-x-6 lg:inline-block p-5'>
                        <NavLinks />
                    </div>

                    {/* Nav menu for small and medium screens */}
                    <div
                        className={`fixed transition-transform duration-300 ease-in-out lg:hidden ${
                            isOpen ? "block" : "hidden"
                        } top-14 left-0 w-full h-auto bg-blue-900 rounded-lg shadow-xl`}
                    >
                        <div className='flex flex-col space-y-6 p-4'>
                            <NavLinks />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
