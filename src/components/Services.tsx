import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scan, Camera, X as XRay, FileText } from "lucide-react";

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
      icon: FileText,
      title: "Documentações ortodônticas",
      description: "Documentação completa para planejamento ortodôntico",
      features: ["Análise detalhada", "Relatórios completos", "Imagens digitais"],
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

          <div className="grid md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default Services;
