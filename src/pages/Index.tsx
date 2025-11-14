import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LoginSection from "@/components/LoginSection";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import SchedulingInfo from "@/components/SchedulingInfo";
import Documents from "@/components/Documents";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <LoginSection />
        <Services />
        <About />
        <Gallery />
        <SchedulingInfo />
        <Documents />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
