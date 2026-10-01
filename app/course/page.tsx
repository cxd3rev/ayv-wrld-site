import type { Metadata } from "next";
import { Course } from "@/components/Course";
import { BackHome } from "@/components/Locale";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "One Man Army Stack — AYV WRLD",
  description: "One Man Army Stack, de cursus over solo SaaS bouwen.",
};

export default function CoursePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-16 md:pt-[4.5rem]">
        <Course />
        <BackHome />
      </main>
      <Footer />
    </>
  );
}
