"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import logo from "../../assests/Logo/apple-logo.jpg";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () =>
            document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    return (
        <div className="relative">
            <div className="flex justify-between items-center p-6">
                <Link href="/" className="h-auto cursor-pointer">
                    <Image src={logo} width={90} alt="A descriptive alt text" />
                </Link>

                <div
                    className="flex justify-center items-center gap-2 relative"
                    ref={dropdownRef}
                >
                    <div
                        onClick={toggleDropdown}
                        className="cursor-pointer relative z-10"
                    >
                        Collections
                    </div>
                    <ChevronDown width={15} color="black" />

                    {isDropdownOpen && (
                        <div className="absolute text-[#1D1D1F] top-8 text-center w-[20rem] text-[17px] bg-white shadow-lg rounded-2xl z-50">
                            <ul className="py-2 px-4">
                                <li className="py-4 px-4 text-[#86868b]">
                                    <div>Apple Watch Series 10</div>
                                </li>
                                <hr />
                                <li className="py-4 px-4 hover:text-blue-500">
                                    <div>Apple Watch Hermes Series 10</div>
                                </li>
                                <hr />
                                <li className="py-4 px-4 hover:text-blue-500">
                                    <div>Apple Watch SE</div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                <button className="text-white px-4 py-2 bg-[#0071e3] rounded-3xl">
                    Save
                </button>
            </div>

            {isDropdownOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
            )}
        </div>
    );
};

export default Header;
