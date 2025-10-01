import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <img src={logo} alt="Centro de Imagens Cranio Faciais" className="h-12 w-auto brightness-0 invert" />
              <p className="text-sm text-background/80">
                Excelência em imagenologia odontológica desde 2002
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Rua Coronel Barbosa, 41</li>
                <li>(19) 98187-3397</li>
                <li>cristina.sewell@terra.com.br</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Horários</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Segunda a quinta: 8:00 - 18:00</li>
                <li>Sexta-feira: 8:00 - 17:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
            <p>© {currentYear} Centro de Imagens Cranio Faciais. Todos os direitos reservados.</p>
            <p className="mt-2">CNPJ: 04.834.407/0001-75</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
