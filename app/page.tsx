import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Service from "@/components/Service";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Single-page composition. Each section owns its own anchor id so the
// navbar / footer links scroll smoothly to it.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technology />
        <Service />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
