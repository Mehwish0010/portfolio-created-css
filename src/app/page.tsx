import About from "@/app/about/page";
import Hero from "@/components/widgets/hero";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
}
