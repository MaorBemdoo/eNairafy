export const revalidate = 86400

import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import HomeDiscount from "@/components/HomeDiscount";

export default async function Home() {
    return (
        <main>
            <Hero />
            <Categories />
            <HomeDiscount />
        </main>
    );
}
