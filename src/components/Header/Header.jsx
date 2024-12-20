import Image from "next/image";
import React from "react";
import logo from "../../assests/Logo/apple-logo.jpg";
import { ChevronDown } from "lucide-react";

const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center p-6">
                <div className="h-auto">
                    <Image src={logo} width={90} alt="A descriptive alt text" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div>Collections</div>
                    <ChevronDown width={15} color="black" />
                </div>
                <button className="text-white px-4 py-2 bg-[#0071e3] rounded-3xl">
                    Save
                </button>
            </div>
        </div>
    );
};

export default Header;
