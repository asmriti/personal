import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-4 md:p-8 ">
      <Header />
      <HeroSection />
    </div>
  );
}
