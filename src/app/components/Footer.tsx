import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

function Footer() {
    return (
        <div className="w-[100%] mx-auto pt-[20px] grid grid-cols-1 grid-rows-3 gap-8 bg-black text-white footB">
            
            <div className="flex justify-center gap-6 text-4xl md:text-5xl">
                <FaFacebook />
                <FaInstagram />
                <FaYoutube />
                <FaTwitter />
            </div>
            
            {/* Navigation Links */}
            
            <div className="flex justify-center">
                <ul className="flex gap-6 md:gap-12">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/articles">Articles</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            
            {/* Copyright Information */}

            <div className="bg-gray-800 flex justify-center py-4">
                <h1 className="text-lg md:text-2xl flex items-center">
                    Copyright <FaCopyright /> 2025 &nbsp;
                    <span className="font-bold">Design By Abdul Ahad</span>
                </h1>
            </div>
        </div>
    );
}

export default Footer;
