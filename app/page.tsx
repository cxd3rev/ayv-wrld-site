import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Websites } from "@/components/Websites";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Websites />
        <CaseStudies />
        <About />
      </main>
      <Footer />
    </>
  );
}
