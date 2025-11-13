import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import equipamento1 from "@/assets/equipamento-1.jpg";
import equipe1 from "@/assets/equipe-1.jpg";
import recepcao2 from "@/assets/recepcao-2.jpg";
import equipe2 from "@/assets/equipe-2.jpg";
const About = () => {
  return <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sobre nós
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fundada em 2002, nossa missão é oferecer serviços de imagenologia odontológica de qualidade para o adequado diagnóstico das condições bucomaxilares. Com mais de duas décadas de experiência, nos consolidamos como referência em exames especializados.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={equipamento1} alt="Equipamento de tomografia computadorizada" className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={equipe1} alt="Nossa equipe de profissionais" className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={recepcao2} alt="Recepção e atendimento" className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={equipe2} alt="Equipe de atendimento" className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>;
};
export default About;