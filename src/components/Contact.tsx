import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(19) 98187-3397",
      link: "https://wa.me/5519981873397",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "cristina.sewell@terra.com.br",
      link: "mailto:cristina.sewell@terra.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Coronel Barbosa, 41",
      link: "https://www.google.com/maps/search/?api=1&query=Rua+Coronel+Barbosa,+41",
    },
  ];

  const schedule = [
    { day: "Segunda a quinta", hours: "8:00 às 18:00" },
    { day: "Sexta-feira", hours: "8:00 às 17:00" },
  ];

  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Entre em contato
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para atendê-lo com qualidade e dedicação
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-3">
                        Horário de funcionamento
                      </h3>
                      <div className="space-y-2">
                        {schedule.map((item, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{item.day}</span>
                            <span className="font-medium text-foreground">{item.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3!2d-47.0!3d-22.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzAwLjAiUyA0N8KwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Centro de Imagens Cranio Faciais"
              ></iframe>
            </Card>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="https://wa.me/5519981873397" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Agendar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
