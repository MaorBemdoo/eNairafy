import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import HomeDiscount from "@/components/HomeDiscount";

export const revalidate = process.env.NODE_ENV == "development" ? 0 : 86400;

export default async function Home() {
    return (
        <main>
            <Hero />
            <Categories />
            <HomeDiscount />
        </main>
    );
}
