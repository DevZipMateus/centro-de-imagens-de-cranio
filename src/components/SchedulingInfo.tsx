import { Card, CardContent } from "@/components/ui/card";

const SchedulingInfo = () => {
  return (
    <section id="agendamento" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default SchedulingInfo;
