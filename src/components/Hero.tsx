import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Centro de Imagens Cranio Faciais
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Excelência em imagenologia odontológica desde 2002, oferecendo diagnósticos precisos e atendimento especializado
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="https://wa.me/5519981873397" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Agendar consulta
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("servicos");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Nossos serviços
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">22+</div>
              <div className="text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Equipamentos modernos</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">6+</div>
              <div className="text-muted-foreground">Planos aceitos</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
