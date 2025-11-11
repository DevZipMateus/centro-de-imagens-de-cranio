import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import fachada1 from "@/assets/hero-bg.jpg";
import fachada2 from "@/assets/fachada-2.jpg";
import recepcao from "@/assets/recepcao.jpg";
import sala1 from "@/assets/sala-1.jpg";
import sala2 from "@/assets/sala-2.jpg";
import equipamentoPanoramico1 from "@/assets/equipamento-panoramico-1.jpg";
import corredorSala from "@/assets/corredor-sala.jpg";
import equipamentoPanoramico2 from "@/assets/equipamento-panoramico-2.jpg";
import cadeiraSalaRaioX from "@/assets/cadeira-sala-raio-x.jpg";

const Gallery = () => {
  const images = [
    {
      src: fachada1,
      alt: "Fachada do Centro de Imagens Cranio Faciais",
      title: "Nossa fachada",
    },
    {
      src: fachada2,
      alt: "Vista externa da clínica",
      title: "Entrada da clínica",
    },
    {
      src: recepcao,
      alt: "Recepção do Centro de Imagens",
      title: "Recepção acolhedora",
    },
    {
      src: sala1,
      alt: "Sala de exames do Centro de Imagens",
      title: "Sala de exames",
    },
    {
      src: sala2,
      alt: "Ambiente de atendimento da clínica",
      title: "Ambiente de atendimento",
    },
    {
      src: equipamentoPanoramico1,
      alt: "Equipamento de raio-x panorâmico digital",
      title: "Equipamento panorâmico",
    },
    {
      src: corredorSala,
      alt: "Corredor com acesso às salas de exame",
      title: "Área de circulação",
    },
    {
      src: equipamentoPanoramico2,
      alt: "Sala com equipamento panorâmico",
      title: "Sala de raio-x panorâmico",
    },
    {
      src: cadeiraSalaRaioX,
      alt: "Cadeira odontológica com equipamento de raio-x intra bucal",
      title: "Sala de raio-x intra bucal",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossas instalações
            </h2>
            <p className="text-lg text-muted-foreground">
              Conheça nosso espaço moderno e acolhedor
            </p>
          </div>

          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-2 overflow-hidden">
                      <div className="relative aspect-video">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                          <h3 className="text-xl font-semibold text-background">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
