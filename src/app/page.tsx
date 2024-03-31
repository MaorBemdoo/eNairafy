import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import HomeDiscount from "@/components/HomeDiscount";

// TODO: ask chatgpt or gemini if you can save revalidate as an env for local and prod
export const revalidate = 86400;

export default async function Home() {
    return (
        <main>
            <Hero />
            <Categories />
            <HomeDiscount />
        </main>
    );
}
