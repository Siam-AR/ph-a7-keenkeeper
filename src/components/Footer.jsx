import React from 'react';
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
             <footer className="bg-[#244D3F] text-center pt-20 pb-10 text-white">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-5xl font-bold mb-4">Keen<span className='font-semibold'>Keeper</span></h2>

        <p className="text-gray-300 mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-10">
          <p className="mb-4 text-lg text-gray-100 font-semibold">Social Links</p>
          <div className="flex justify-center gap-4">
            
            <Link href="#">
              <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition">
                <AiFillInstagram className='text-2xl'/>
              </div>
            </Link>

            <Link href="#">
              <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition">
                <FaFacebookF className='text-xl'/>
              </div>
            </Link>

            <Link href="#">
              <div className="w-10 h-10 flex items-center justify-center  bg-white text-black rounded-full hover:scale-110 transition">
                <FaXTwitter className='text-xl'/>
              </div>
            </Link>

          </div>
        </div>

        <div className="border-t border-gray-500/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
          
          <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies</Link>
          </div>

        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;