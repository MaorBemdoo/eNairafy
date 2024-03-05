"use client"

import Button from "@/components/Button";
import LogoSlider from "@/components/LogoSlider";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="w-full" id="hero">
        <div className="bg-[url(/hero.jpg)] bg-cover bg-center bg-fixed h-[500px] w-full">
          <div className="container mx-auto p-4 flex items-end h-full">
            <div className="max-w-[50%] md:max-w-max">
              <h1 className="text-6xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-transparent to-green-600">Elevate Your<br/>Tech Experience</h1>
              <p className="text-lg my-5">Explore the latest in cutting-edge technology<br/>and elevate your digital lifestyle.</p>
              <Link href="/products"><Button color="black">Shop Now</Button></Link>
            </div>
          </div>
        </div>
        <LogoSlider />
      </section>
      <section id="categories" className="container mx-auto px-4">
        <h1>Top Categories</h1>
      </section>
    </main>
  );
}
