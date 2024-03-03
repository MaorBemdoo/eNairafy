import Image from "next/image";
import heroImg from "../../public/hero.jpg"
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <section className="w-full" id="hero">
        <div className="relative">
            <div className="absolute bottom-0">
              <h1>Elevate Your Tech Experience</h1>
              <p>Explore the latest in cutting-edge technology and elevate your digital lifestyle.</p>
              <Button color="green">Shop Now</Button>
            </div>
            <Image src={heroImg} alt="hero img" className="w-full"/>
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
