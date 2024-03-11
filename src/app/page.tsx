import Button from "@/components/Button";
import Categories from "@/components/Categories";
import HomeDiscount from "@/components/HomeDiscount";
import LogoSlider from "@/components/LogoSlider";
import { getCategories } from "@/utils/getCategories";
import Link from "next/link";

export default async function Home() {

  return (
    <main>
      <section className="w-full" id="hero">
        <div className="bg-[url(/hero.jpg)] bg-cover bg-center bg-fixed h-[500px] w-full mobile:min-h-[90dvh]">
          <div className="container py-4 flex items-end h-full mobile:items-center mobile:justify-center">
            <div className="max-w-[50%] md:max-w-max mobile:break-all">
              <h1 className="text-6xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-transparent to-green-600">Elevate Your<br/>Tech Experience</h1>
              <p className="text-lg my-5">Explore the latest in cutting-edge technology<br/>and elevate your digital lifestyle.</p>
              <Link href="/products"><Button color="black">Shop Now</Button></Link>
            </div>
          </div>
        </div>
        <LogoSlider />
      </section>
      <Categories/>
      <HomeDiscount />
    </main>
  );
}
