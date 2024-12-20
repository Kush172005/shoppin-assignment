import React, { useEffect, useState } from "react";
import Image from "next/image";
import appleWatch from "../../assests/Images/apple-watch-main.png";
import watchStrap from "../../assests/Images/watch-strap.jpg";
import appleWatchLeftView from "../../assests/Images/watch-leftView.jpeg";
import sizeIcon from "../../assests/Icons/size.svg";
import caseIcon from "../../assests/Icons/case.svg";
import bandIcon from "../../assests/Icons/band.svg";
import Link from "next/link";

const Main = () => {
    const [showFirstSection, setShowFirstSection] = useState(true);
    const [isSideView, setIsSideView] = useState(false);

    const handleGetStarted = () => {
        setShowFirstSection(false);
    };

    const toggleImage = () => {
        setIsSideView(!isSideView);
    };

    useEffect(() => {
        localStorage.setItem("centerFaceImageIndex", 0);
        localStorage.setItem("centerStrapImageIndex", 0);
    });

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="font-sans flex flex-col items-center text-[#1d1d1f] mt-[5vh] px-4">
                    <div
                        className={`first-section z-[3] relative transition-all duration-1000 ${
                            showFirstSection
                                ? "opacity-100 max-h-[100vh]"
                                : "opacity-0 max-h-0"
                        }`}
                    >
                        <div className="text-base md:text-lg font-normal tracking-[0.011em] leading-[1.381] pb-2">
                            Apple Watch Studio
                        </div>
                        <div className="text-[64px] min-w-[50vw] font-semibold tracking-[-0.009em] leading-[1.0625]">
                            <div>Choose a case.</div>
                            <div>Pick a band.</div>
                            <div>Create your own style.</div>
                        </div>
                        <div className="mt-[6%]">
                            <button
                                onClick={handleGetStarted}
                                className="px-4 py-2 text-base md:text-lg bg-[#0071e3] text-white rounded-3xl"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div
                        className={`second-section relative transition-all duration-1000 overflow-hidden ${
                            showFirstSection
                                ? "max-w-full md:max-w-[55vw]"
                                : "max-w-[400px]"
                        }`}
                    >
                        <Image
                            className={`z-[1] absolute transition-all duration-[700ms] ${
                                isSideView
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-90"
                            }`}
                            src={appleWatchLeftView}
                            alt="apple-watch-left-view"
                        />
                        <Image
                            className={`z-[1] absolute transition-all duration-[700ms] ${
                                isSideView
                                    ? "opacity-0 scale-0"
                                    : "opacity-100 scale-100"
                            }`}
                            src={appleWatch}
                            alt="apple-watch"
                        />
                        <Image
                            className="z-[2]"
                            src={watchStrap}
                            alt="watch-strap"
                        />
                    </div>
                </div>
            </div>
            {isSideView ? (
                <div
                    className="text-center mt-5 text-blue-700 text-xs underline cursor-pointer"
                    onClick={toggleImage}
                >
                    Front View
                </div>
            ) : (
                <div
                    className="text-center mt-5 text-blue-700 text-xs underline cursor-pointer"
                    onClick={toggleImage}
                >
                    Side View
                </div>
            )}
            <div className="flex flex-col items-center mt-4">
                <div className="text-xs text-[#6e6e73] font-semibold">
                    APPLE WATCH SERIES 10
                </div>
                <div className="font-semibold text-[#1d1d1f] mt-1">
                    46mm Jet Black Aluminum Case with Black Solo Loop
                </div>
                <div className="text-sm mt-1">From $429</div>
            </div>

            <div className="flex justify-center mt-[3rem] gap-4 text-lg">
                <div className="flex items-center gap-2 bg-[#e8e8ed] rounded-3xl px-4 py-2 cursor-pointer">
                    <Image src={sizeIcon} alt="size-icon" />
                    Size
                </div>

                <Link
                    href="/case"
                    className="flex items-center gap-2 bg-[#e8e8ed] rounded-3xl px-4 py-2 cursor-pointer"
                >
                    <Image src={caseIcon} alt="case-icon" />
                    Case
                </Link>
                <Link
                    href="/strap"
                    className="flex items-center gap-2 bg-[#e8e8ed] rounded-3xl px-4 py-2 cursor-pointer"
                >
                    <Image src={bandIcon} alt="band-icon" />
                    Band
                </Link>
            </div>
        </>
    );
};

export default Main;
