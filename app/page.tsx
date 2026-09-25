import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Course } from "@/components/Course";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Products />
        <Course />
        <CaseStudies />
        <About />
      </main>
      <Footer />
    </>
  );
}
