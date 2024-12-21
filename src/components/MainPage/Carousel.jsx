"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import face1 from "../../assests/WatchFaces/face1.png";
import face2 from "../../assests/WatchFaces/face2.png";
import face3 from "../../assests/WatchFaces/face3.png";
import face4 from "../../assests/WatchFaces/face4.png";
import face5 from "../../assests/WatchFaces/face5.png";
import face6 from "../../assests/WatchFaces/face6.png";
import strap1 from "../../assests/straps/strap1.jpeg";
import strap2 from "../../assests/straps/strap2.jpeg";
import strap3 from "../../assests/straps/strap3.jpeg";
import strap4 from "../../assests/straps/strap4.jpeg";
import strap5 from "../../assests/straps/strap5.jpeg";
import strap6 from "../../assests/straps/strap6.jpeg";
import strap7 from "../../assests/straps/strap7.jpeg";
import strap8 from "../../assests/straps/strap8.jpeg";
import strap9 from "../../assests/straps/strap9.jpeg";
import sizeIcon from "../../assests/Icons/size.svg";
import caseIcon from "../../assests/Icons/case.svg";
import bandIcon from "../../assests/Icons/band.svg";

import Link from "next/link";

const images = [
    { front: face6, title: "46mm Silver Aluminum Case" },
    { front: face5, title: "46mm Rose Black Aluminum Case" },
    { front: face4, title: "46mm Jet Gold Aluminum Case" },
    { front: face3, title: "46mm Natural Titanium Case" },
    { front: face2, title: "46mm Gold Titanium Case" },
    { front: face1, title: "46mm Slate Titanium Case with Black" },
];

const bandImages = [
    { front: strap1, title: "Natural Milanese Loop" },
    { front: strap2, title: "Natural Link Bracelet" },
    { front: strap3, title: "Pride Edition Sport Loop" },
    { front: strap4, title: "Black Unity Sport Loop" },
    { front: strap5, title: "Denim Sport Band" },
    { front: strap6, title: "Black Unity Sport Band" },
    { front: strap7, title: "Pride Edition Braided Solo Loop" },
    { front: strap8, title: "Black Unity Braided Solo Loop" },
    { front: strap9, title: "Blue Flame Nike Sport Band" },
];

const Carousel = () => {
    const [centerFaceImageIndex, setCenterFaceImageIndex] = useState(0);
    const [imageDynamic, setImageDynamic] = useState(0);
    const [isSideView, setIsSideView] = useState(false);
    const carouselRef = useRef(null);
    const imageWidth = 400;
    const imageSpacing = -5 * 16;
    const totalImageWidth = imageWidth + imageSpacing;

    // for the handling of right scroll
    const scrollLeft = () => {
        if (carouselRef.current) {
            const newScrollPosition =
                carouselRef.current.scrollLeft - totalImageWidth;
            carouselRef.current.scrollTo({
                left: newScrollPosition,
                behavior: "smooth",
            });
        }
    };

    // for the handling of left scroll
    const scrollRight = () => {
        if (carouselRef.current) {
            const newScrollPosition =
                carouselRef.current.scrollLeft + totalImageWidth;
            carouselRef.current.scrollTo({
                left: newScrollPosition,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const val = localStorage.getItem("centerStrapImageIndex");
        setImageDynamic(val);
        console.log(val);
    });

    // Here we are finding which image is in center by checking the image width
    // and current scroll value and dividing both
    useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current) {
                const scrollLeft = carouselRef.current.scrollLeft;
                const index = Math.round(scrollLeft / totalImageWidth);
                setCenterFaceImageIndex(index);
            }
        };

        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (carousel) {
                carousel.removeEventListener("scroll", handleScroll);
            }
        };
    }, [totalImageWidth]);

    return (
        <>
            <div className="flex flex-col items-center relative">
                <div className="absolute z-10">
                    <Image
                        src={bandImages[imageDynamic]?.front}
                        alt="watch-strap"
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                </div>

                <div>
                    <button
                        onClick={scrollLeft}
                        className="absolute left-[1rem] top-[10rem] z-30 bg-gray-200 text-gray-500 p-[6px] rounded-full"
                    >
                        <ChevronLeft height={27} width={27} />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="absolute right-[1rem] top-[10rem] z-30 bg-gray-200 text-gray-500 p-[6px] rounded-full"
                    >
                        <ChevronRight height={27} width={27} />
                    </button>
                </div>

                <div
                    ref={carouselRef}
                    className={`absolute z-20 flex ${
                        isSideView ? "overflow-hidden" : "overflow-x-auto"
                    } space-x-[-5rem] snap-x snap-mandatory scrollbar-hidden px-[40%]`}
                >
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 snap-center ">
                            <Image
                                src={image.front}
                                alt={`apple-watch-${index}`}
                                width={400}
                                height={400}
                                className="transition-all duration-[1000ms] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center mt-[28rem]">
                <div className="text-xs text-[#6e6e73] font-semibold">
                    APPLE WATCH SERIES 10
                </div>
                <div className="font-semibold text-[#1d1d1f] mt-1">
                    {images[centerFaceImageIndex]?.title} with{" "}
                    {bandImages[imageDynamic]?.title}
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
                    onClick={() => {
                        localStorage.setItem(
                            "centerFaceImageIndex",
                            centerFaceImageIndex
                        );
                    }}
                >
                    <Image src={bandIcon} alt="band-icon" />
                    Band
                </Link>
            </div>
        </>
    );
};

export default Carousel;
