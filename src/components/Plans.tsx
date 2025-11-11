import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Plans = () => {
  const plans = [
    "Uniodonto",
    "Abertta Saúde",
    "Rede Unna",
    "Hapvida",
    "Brazil Dental",
    "Inpao",
  ];

  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Planos aceitos
            </h2>
            <p className="text-lg text-muted-foreground">
              Atendemos pacientes particulares e diversos planos odontológicos
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{plan}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Plans;
