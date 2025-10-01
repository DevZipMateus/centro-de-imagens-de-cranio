import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import requisicaoFrente from "@/assets/requisicao-frente.jpg";
import requisicaoVerso from "@/assets/requisicao-verso.jpg";

const Documents = () => {
  const handleDownload = (imageUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="documentos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Requisição de exames
            </h2>
            <p className="text-lg text-muted-foreground">
              Baixe e preencha o formulário antes de sua consulta
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Requisição - Frente</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-[8.5/11] bg-muted rounded-lg overflow-hidden border-2">
                  <img
                    src={requisicaoFrente}
                    alt="Formulário de requisição de exames - frente"
                    className="w-full h-full object-contain"
                  />
                </div>
                <Button
                  onClick={() => handleDownload(requisicaoFrente, 'requisicao-exames-frente.jpg')}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar frente
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Requisição - Verso</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-[8.5/11] bg-muted rounded-lg overflow-hidden border-2">
                  <img
                    src={requisicaoVerso}
                    alt="Formulário de requisição de exames - verso"
                    className="w-full h-full object-contain"
                  />
                </div>
                <Button
                  onClick={() => handleDownload(requisicaoVerso, 'requisicao-exames-verso.jpg')}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar verso
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Como utilizar o formulário
                </h3>
                <p className="text-muted-foreground">
                  Baixe ambos os lados do formulário, preencha com suas informações e leve na consulta. 
                  Isso agiliza o atendimento e garante que todos os exames necessários sejam realizados.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Documents;
