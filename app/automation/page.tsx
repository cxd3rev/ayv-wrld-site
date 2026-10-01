import type { Metadata } from "next";
import { BackHome } from "@/components/Locale";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Product } from "@/components/Product";

export const metadata: Metadata = {
  title: "AYV Automation — AYV WRLD",
  description:
    "AYV Automation is een apart project. Deze pagina verwijst naar de eigen site.",
};

export default function AutomationPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-16 md:pt-[4.5rem]">
        <Product />
        <BackHome />
      </main>
      <Footer />
    </>
  );
}
