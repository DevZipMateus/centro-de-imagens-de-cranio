import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DentistLogin from "@/components/DentistLogin";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import Documents from "@/components/Documents";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DentistLogin />
        <About />
        <Gallery />
        <Services />
        <Plans />
        <Documents />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
