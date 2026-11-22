import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="relative min-h-screen w-full overflow-x-clip">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[900px]" aria-hidden="true" />
        <Navigation />
        <div className="relative mx-auto max-w-[1040px] px-4 sm:px-6">
          <main>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Certificates />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
