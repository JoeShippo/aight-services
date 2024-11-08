import React from 'react';
import {FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-10">
            {/* <div className="container mx-auto px-8 pb-20 lg:px-32 flex flex-col md:flex-row justify-between items-start">
                <div className="mb-8 md:mb-0 md:w-96">
                    <h2 className="text-4xl font-bold mb-4">Digital Solutions for Small Businesses</h2>
                    <button className="btn btn-secondary mt-4 text-lg font-semibold flex items-center gap-2">
                        Get in touch
                    </button>
                </div>
            </div> */}
            <div className="container mx-auto px-8 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section */}
                <div className="col-span-1 flex flex-col justify-center">
                    <h4 className="font-bold text-2xl">aight.fun</h4>
                </div>

                {/* Right Section - Social Links and Logo */}
                <div className="col-span-1 flex flex-col justify-center md:items-end space-y-4">
                    <div className="flex space-x-4 text-md">
                        <a href="tel:07429339127" className="hover:opacity-50 flex">
                            07429339127
                        </a>
                        <a href="mailto:joe.shipton@aight.fun" className="hover:opacity-50 flex">
                            joe.shipton@aight.fun
                        </a>
                        <span>|</span>
                        <a href="#instagram" className="hover:opacity-50 text-xl"><FaInstagram /></a>
                        <a href="#linkedin" className="hover:opacity-50 text-xl"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;