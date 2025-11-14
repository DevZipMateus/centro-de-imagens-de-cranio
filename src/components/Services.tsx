import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scan, Camera, X as XRay } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Radiografias intra bucais",
      description: "Periapicais, interproximais e de oclusão",
      features: ["Alta resolução", "Baixa radiação", "Resultado rápido"],
    },
    {
      icon: XRay,
      title: "Radiografias extra bucais",
      description: "Panorâmica, telerradiografias laterais e frontais, ATM",
      features: ["Visão completa", "Precisão diagnóstica", "Tecnologia digital"],
    },
    {
      icon: Scan,
      title: "Tomografias volumétricas",
      description: "Exames 3D de alta precisão",
      features: ["Imagem tridimensional", "Planejamento cirúrgico", "Maior precisão"],
    },
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
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={oclusal1} alt="Radiografia oclusal" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={oclusal2} alt="Radiografia oclusal" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={panoramica1} alt="Radiografia panorâmica" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={panoramica2} alt="Radiografia panorâmica" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={panoramicaPeriapicais} alt="Radiografia panorâmica com periapicais" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={panoramicaDenticaoMista} alt="Radiografia panorâmica de dentição mista" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={mandibula3d} alt="Imagem 3D de mandíbula" className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={periapicaisBocaToda} alt="Radiografias periapicais de boca toda com interproximais" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={radiografiaInterproximal} alt="Radiografia interproximal de pré-molares" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={radiografiaPeriapical} alt="Radiografia periapical de pré-molares inferiores" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={radiografiasPeriapicaisBocaToda} alt="Radiografias periapicais de boca toda com interproximais" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={telerradiografiaFrontal} alt="Telerradiografia frontal" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={tomoCanalEntreRaizes} alt="Tomografia de canal entre raízes" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={tomoFratura21} alt="Tomografia de fratura no dente 21" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={tomoFratura21Coronal} alt="Tomografia coronal de fratura no dente 21" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={tomoFratura26Axial} alt="Tomografia axial de fratura no dente 26" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={tomoLesao} alt="Tomografia de lesão" className="w-full h-full object-contain bg-muted" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
