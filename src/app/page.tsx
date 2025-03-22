import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
