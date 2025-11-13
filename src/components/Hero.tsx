import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Metallic Ellipse with Logo and Title */}
            <div className="flex justify-center items-center mb-8">
              <div className="metallic-ellipse flex flex-col items-center justify-center gap-2 md:gap-4 p-6 md:p-8">
                <img 
                  src={logo} 
                  alt="Centro de Imagens Cranio Faciais Logo" 
                  className="h-16 md:h-24 w-auto relative z-10" 
                />
                <h1 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-tahoma leading-tight text-center"
                  style={{ color: '#004A99' }}
                >
                  Centro de Imagens
                  <br />
                  Cranio Faciais
                </h1>
              </div>
            </div>

            {/* Primary Description */}
            <h2 className="text-base md:text-lg font-tahoma max-w-3xl mx-auto" style={{ color: '#555' }}>
              Imaginologia Odontológica desde 2002, oferecendo diagnósticos precisos e atendimento especializado
            </h2>

            {/* Secondary Description */}
            <p className="text-base md:text-lg font-tahoma max-w-3xl mx-auto" style={{ color: '#555' }}>
              Atendimentos particulares e planos odontológicos
            </p>

            {/* CTA Button */}
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
