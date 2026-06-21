import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="w-full min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Process />
          <Projects />
          <Testimonials />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
