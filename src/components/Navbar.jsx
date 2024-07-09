import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import hf from "../components/images/hf.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sticky z-30 top-0 bg-green-500">
            <div className="relative top-0 z-20 flex justify-between items-center px-4 sm:px-[50px] lg:px-[100px] py-4">
                <img src={hf} alt="" className="w-[50px] h-[50px]" />
                <nav>
                    <ul className={`fixed top-0 left-0 w-full h-full bg-green-500 flex flex-col items-center justify-center transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:static lg:flex lg:flex-row lg:gap-[50px] lg:translate-x-0 lg:bg-transparent lg:justify-end lg:items-center font-outfit`}>
                        <li className="lg:hidden absolute top-4 right-4">
                            <button onClick={toggleMenu}>
                                <FaTimes size={30} className="text-white" />
                            </button>
                        </li>
                        <li className="my-4 lg:my-0 text-white font-bold"><Link to="/">HOME</Link></li>
                        <li className="my-4 lg:my-0 text-white font-bold"><Link to="/shop">SHOP</Link></li>
                        <li className="my-4 lg:my-0 text-white font-bold"><Link to="/vendors">VENDORS</Link></li>
                        <li className="my-4 lg:my-0 text-white font-bold"><Link to="/contact">CONTACT US</Link></li>
                        <li className="my-4 lg:my-0 lg:hidden bg-white text-green-500 font-outfit px-[30px] py-[10px] rounded-[50px] hover:bg-green-500 hover:border-[1px] hover:border-white hover:text-white"><a href="#">Sign in</a></li>
                    </ul>
                </nav>
                <button className="hidden lg:block bg-white text-green-500 font-outfit px-[30px] py-[10px] rounded-[50px] hover:bg-green-500 hover:border-[1px] hover:border-white hover:text-white">
                    Sign in
                </button>
                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        <FaBars size={30} className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
