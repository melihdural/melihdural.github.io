import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import CorporateProjects from "@/components/CorporateProjects";
import Games from "@/components/Games";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-600">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <CorporateProjects />
      <Games />
      <Footer />
    </main>
  );
}
