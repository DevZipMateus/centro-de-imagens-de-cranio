import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Scan, Camera, X as XRay, ZoomIn } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import mandibula3d from "@/assets/3d-mandibula.jpg";
import oclusal1 from "@/assets/oclusal-1.jpg";
import oclusal2 from "@/assets/oclusal-2.jpg";
import panoramica1 from "@/assets/panoramica-1.jpg";
import panoramica2 from "@/assets/panoramica-2.jpg";
import panoramicaPeriapicais from "@/assets/panoramica-periapicais.jpg";
import panoramicaDenticaoMista from "@/assets/panoramica-denticao-mista.jpg";
import periapicaisBocaToda from "@/assets/periapicais-boca-toda-interproximais.jpg";
import radiografiaInterproximal from "@/assets/radiografia-interproximal-premolares.jpg";
import radiografiaPeriapical from "@/assets/radiografia-periapical-premolares-inferiores.jpg";
import radiografiasPeriapicaisBocaToda from "@/assets/radiografias-periapicais-boca-toda-interproximais.jpg";
import telerradiografiaFrontal from "@/assets/telerradiografia-frontal.jpg";
import tomoCanalEntreRaizes from "@/assets/tomo-canal-entre-raizes.jpg";
import tomoFratura21 from "@/assets/tomo-fratura-21.jpg";
import tomoFratura21Coronal from "@/assets/tomo-fratura-21-coronal.jpg";
import tomoFratura26Axial from "@/assets/tomo-fratura-26-axial.jpg";
import tomoLesao from "@/assets/tomo-lesao.jpg";

interface ServiceImage {
  src: string;
  title: string;
}

interface Service {
  icon: typeof Camera;
  title: string;
  description: string;
  images: ServiceImage[];
}

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<ServiceImage | null>(null);

  const services: Service[] = [
    {
      icon: Camera,
      title: "Radiografias intra bucais",
      description: "Periapicais, interproximais e oclusais",
      images: [
        {
          src: periapicaisBocaToda,
          title: "Periapicais de boca toda com interproximais"
        },
        {
          src: radiografiaPeriapical,
          title: "Radiografia periapical de pré-molares inferiores"
        },
        {
          src: radiografiasPeriapicaisBocaToda,
          title: "Radiografias periapicais completas"
        },
        {
          src: panoramicaPeriapicais,
          title: "Panorâmica com periapicais dos incisivos"
        },
        {
          src: radiografiaInterproximal,
          title: "Radiografia interproximal de pré-molares"
        },
        {
          src: oclusal1,
          title: "Radiografia oclusal"
        },
        {
          src: oclusal2,
          title: "Radiografia oclusal"
        }
      ]
    },
    {
      icon: XRay,
      title: "Radiografias extra bucais",
      description: "Panorâmica, telerradiografias laterais e frontais, ATM",
      images: [
        {
          src: panoramica1,
          title: "Radiografia panorâmica"
        },
        {
          src: panoramica2,
          title: "Radiografia panorâmica"
        },
        {
          src: panoramicaPeriapicais,
          title: "Panorâmica com periapicais"
        },
        {
          src: panoramicaDenticaoMista,
          title: "Panorâmica de dentição mista"
        },
        {
          src: telerradiografiaFrontal,
          title: "Telerradiografia frontal"
        }
      ]
    },
    {
      icon: Scan,
      title: "Tomografias volumétricas",
      description: "Exames 3D de alta precisão",
      images: [
        {
          src: mandibula3d,
          title: "Imagem 3D de mandíbula"
        },
        {
          src: tomoCanalEntreRaizes,
          title: "Tomografia de canal entre raízes"
        },
        {
          src: tomoFratura21,
          title: "Tomografia de fratura no dente 21"
        },
        {
          src: tomoFratura21Coronal,
          title: "Tomografia coronal - fratura no dente 21"
        },
        {
          src: tomoFratura26Axial,
          title: "Tomografia axial - fratura no dente 26"
        },
        {
          src: tomoLesao,
          title: "Tomografia de lesão"
        }
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma ampla gama de exames de imagenologia odontológica para auxiliar no diagnóstico do paciente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {services.map((service, serviceIndex) => (
            <div key={serviceIndex} className="space-y-4 animate-fade-in" style={{ animationDelay: `${serviceIndex * 150}ms` }}>
              <h3 className="text-2xl font-semibold text-foreground text-center">
                {service.title}
              </h3>
              <div className="max-w-5xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    {service.images.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex}>
                        <div 
                          className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer"
                          onClick={() => setSelectedImage(image)}
                        >
                          <img 
                            src={image.src} 
                            alt={image.title} 
                            className="w-full h-full object-contain bg-muted transition-transform duration-300 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/90 rounded-full p-3">
                              <ZoomIn className="w-6 h-6 text-primary-foreground" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <p className="text-white font-medium text-sm md:text-base">
                              {image.title}
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </div>
          ))}

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
              <DialogTitle className="sr-only">
                {selectedImage?.title}
              </DialogTitle>
              {selectedImage && (
                <div className="relative w-full h-full flex flex-col">
                  <div className="flex-1 flex items-center justify-center bg-black/90 p-4">
                    <img 
                      src={selectedImage.src} 
                      alt={selectedImage.title}
                      className="max-w-full max-h-[85vh] object-contain"
                    />
                  </div>
                  <div className="bg-background/95 p-4 border-t">
                    <p className="text-foreground font-medium text-center">
                      {selectedImage.title}
                    </p>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Services;
