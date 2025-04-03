//import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Hero";
import NewsCard from "@/components/shared/NewsCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-12 px-16">
      <Hero />
      <div className="py-2 mt-8">
        <h2 className="text-2xl font-bold mb-8">latest News</h2>
      </div>
      <div>
        <NewsCard />
      </div>
    </div>
  );
}
