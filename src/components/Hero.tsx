import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/50 to-primary/40"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center space-y-8 animate-fade-in">
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-col md:flex-row">
            <img src={logo} alt="Centro de Imagens Crânio Faciais Logo" className="h-16 md:h-28 w-auto" />
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold font-tahoma text-foreground leading-tight break-words">
              CENTRO DE IMAGENS CRÂNIO FACIAIS
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Imaginologia Odontológica desde 2002, oferecendo diagnósticos precisos e atendimento especializado
          </h2>

          <div className="flex justify-center pt-6">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="https://wa.me/5519981873397" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Entre em contato
              </a>
            </Button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
