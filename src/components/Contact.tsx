import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      content: "(19) 3432 7752 / (19) 3422 5248",
      link: "tel:+551934327752",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "(19) 98187-3397",
      link: "https://wa.me/5519981873397",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "cicfpiracicaba@gmail.com",
      link: "mailto:cicfpiracicaba@gmail.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Coronel Barbosa, 41",
      link: "https://maps.app.goo.gl/gkzJQRGetHNtwkLC6",
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

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="space-y-2 text-center">
                <h3 className="font-semibold text-foreground text-lg mb-3">
                  Como agendar?
                </h3>
                <p className="text-muted-foreground">
                  Todos os nossos agendamentos são via telefone fixo <strong className="text-foreground">(19) 3432 7752 / (19) 3422 5248</strong>. Não agendamos por WhatsApp. Nosso WhatsApp <strong className="text-foreground">(19) 98187-3397</strong> é disponível para contato e envio de pedidos e carteirinhas de convênios.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {contactInfo.filter(info => info.title !== "Endereço").map((info, index) => {
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

              <Card className="border-2 border-primary/20 bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-3">
                        Responsável Técnico
                      </h3>
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">Dra. Cristina Maria Dumit Sewell</p>
                        <p className="text-muted-foreground text-sm">CRO-SP: 28.403</p>
                        <a 
                          href="mailto:cristina.sewell@terra.com.br"
                          className="text-primary hover:text-primary/80 transition-colors text-sm"
                        >
                          cristina.sewell@terra.com.br
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden h-[500px]">
                <iframe
                  src="https://maps.google.com/maps?q=Rua+Coronel+Quirino+Barbosa,+41,+Bonfim,+Campinas+-+SP,+13070-010&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Centro de Imagens Cranio Faciais"
                ></iframe>
              </Card>

              {contactInfo.filter(info => info.title === "Endereço").map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={index}
                    className="text-center py-4 space-y-3"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Icon className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">
                        {info.title}
                      </h3>
                    </div>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-foreground hover:text-primary transition-colors font-medium inline-block"
                    >
                      {info.content}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
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
    </section>
  );
};

export default Contact;
