import Navbar from "@/components/Navbar";
import IntroLoader from "@/components/IntroLoader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Articles />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
