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
            className="inline-block grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all"
            onMouseEnter={pauseAnim}
            onMouseLeave={continueAnim}
            key={name}
        />
    );
});

const LogoSlider = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap *:px-5">
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
