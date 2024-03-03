"use client"

import Image from "next/image";
import heroImg from "../../public/hero.jpg"
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="w-full" id="hero">
        <div className="relative">
          <div className="absolute bottom-7 w-full">
            <div className="container mx-auto px-4">
              <h1 className="text-6xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-transparent to-green-600">Elevate Your<br/>Tech Experience</h1>
              <p className="text-lg mb-2">Explore the latest in cutting-edge technology<br/>and elevate your digital lifestyle.</p>
              <Link href="/products"><Button color="black">Shop Now</Button></Link>
            </div>
          </div>
          <Image src={heroImg} alt="hero img" className="w-full h-[500px] object-cover" priority/>
        </div>
        <div>
          {/* Companies sponsors like samsung */}
        </div>
      </section>
      <section id="categories" className="container mx-auto px-4">
        <h1>Top Categories</h1>
      </section>
    </main>
  );
}
