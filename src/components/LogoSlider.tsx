"use client"

import Image from "next/image";
import "@/styles/LogoSlider.scss";
import { MouseEventHandler } from "react";

const LogosData = [
    "Amazon",
    "Apple",
    "IBM",
    "Meta",
    "Microsoft",
    "Samsung",
    "Sony",
];

const pauseAnim: MouseEventHandler<HTMLImageElement> = (e) => {
    const target = e.target as HTMLImageElement
    const sliderAnim = target.parentElement as HTMLDivElement
    const nextSliderAnim = (sliderAnim.nextElementSibling || sliderAnim.previousElementSibling) as HTMLDivElement
    sliderAnim.style.animationPlayState = "paused"
    nextSliderAnim.style.animationPlayState = "paused"
}

const continueAnim: MouseEventHandler<HTMLImageElement> = (e) => {
    const target = e.target as HTMLImageElement
    const sliderAnim = target.parentElement as HTMLDivElement
    const nextSliderAnim = (sliderAnim.nextElementSibling || sliderAnim.previousElementSibling) as HTMLDivElement
    sliderAnim.style.animationPlayState = "running"
    nextSliderAnim.style.animationPlayState = "running"
}

const mappedLogos = LogosData.map((name) => {
    return (
        <Image
            src={`/${name}.png`}
            alt={`${name} logo`}
            height={100}
            width={150}
            priority
            className="inline-block grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all sm:w-[100px]"
            onMouseEnter={pauseAnim}
            onMouseLeave={continueAnim}
            key={name}
        />
    );
});

const LogoSlider = () => {
    return (
        <div className="relative overflow-hidden whitespace-nowrap *:px-5 before:content-[''] before:absolute before:left-0 before:bg-gradient-to-l before:from-transparent before:to-white before:w-[100px] before:h-full before:z-10 after:content-[''] after:absolute after:right-0 after:bg-gradient-to-r after:from-transparent after:to-white after:w-[100px] after:h-full after:z-10">
            <div className="w-max inline-block space-x-10 slider-anim">
                {mappedLogos}
            </div>
            <div className="w-max inline-block space-x-10 slider-anim">
                {mappedLogos}
            </div>
        </div>
    );
};
export default LogoSlider;
