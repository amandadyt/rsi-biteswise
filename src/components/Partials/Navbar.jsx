import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return(
        <div className="flex-no-wrap relative w-full flex items-center justify-between p-7 font-poppins">
            <div>
                <p className="font-bold text-3xl">BitesWise</p>
            </div>
            
            <div className="font-medium">
                <Link to='/' className="duration-200 cursor-pointer text-teal-700 hover:text-teal-500 py-3 px-8 font-bold">
                    Beranda
                </Link>
                <Link to='/kalkulator' className="duration-200 cursor-pointer text-teal-700 hover:text-teal-500 py-3 px-8 font-bold">
                    Kalkulator BMI
                </Link>
                <Link to='/katalog' className="duration-200 cursor-pointer text-teal-700 hover:text-teal-500 py-3 px-8 font-bold">
                    Katalog
                </Link>
                <Link to='/keranjang' className="duration-200 cursor-pointer text-teal-700 hover:text-teal-500 py-3 px-8 font-bold">
                    Keranjang
                </Link>
                <Link to='/profil' className="duration-200 cursor-pointer text-teal-700 hover:text-teal-500 py-3 px-8 font-bold">
                    Profil
                </Link>
            </div>
        </div>
    )
}

export default Navbar;