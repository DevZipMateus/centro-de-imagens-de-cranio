import { Award, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Qualidade",
      description: "Equipamentos de última geração para diagnósticos precisos",
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Imagens de alta resolução para análises detalhadas",
    },
    {
      icon: Heart,
      title: "Cuidado",
      description: "Atendimento humanizado e ambiente acolhedor",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
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

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 space-y-4 text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
