import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const PatientLogin = () => {
  const [docUser, setDocUser] = useState("Número");
  const [senhaUser, setSenhaUser] = useState("Senha");
  const [docUserError, setDocUserError] = useState(false);
  const [senhaUserError, setSenhaUserError] = useState(false);
  const [senhaType, setSenhaType] = useState<"text" | "password">("text");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let hasError = false;

    if (!docUser.trim() || docUser === "Número") {
      setDocUserError(true);
      hasError = true;
    } else {
      setDocUserError(false);
    }

    if (!senhaUser.trim() || senhaUser === "Senha") {
      setSenhaUserError(true);
      hasError = true;
    } else {
      setSenhaUserError(false);
    }

    if (hasError) {
      e.preventDefault();
    }
  };

  return (
    <Card className="border-2 h-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl">
          Área do Paciente
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          method="POST"
          action="https://centrodeimagens.radiomemory.com.br/paciente.php"
          target="_top"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="doc_user" className="text-foreground">
              Número do exame
            </Label>
            <Input
              id="doc_user"
              name="doc_user"
              type="text"
              value={docUser}
              onFocus={() => {
                if (docUser === "Número") setDocUser("");
              }}
              onBlur={() => {
                if (docUser === "") setDocUser("Número");
              }}
              onChange={(e) => {
                setDocUser(e.target.value);
                setDocUserError(false);
              }}
              className={`${docUserError ? "border-red-500" : ""} ${docUser === "Número" ? "text-muted-foreground" : ""}`}
            />
            {docUserError && (
              <p className="text-sm text-red-500">
                Por favor, preencha o número do exame
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="senha_user" className="text-foreground">
              Senha
            </Label>
            <Input
              id="senha_user"
              name="senha_user"
              type={senhaType}
              value={senhaUser}
              onFocus={() => {
                if (senhaUser === "Senha") {
                  setSenhaUser("");
                  setSenhaType("password");
                }
              }}
              onBlur={() => {
                if (senhaUser === "") {
                  setSenhaUser("Senha");
                  setSenhaType("text");
                }
              }}
              onChange={(e) => {
                setSenhaUser(e.target.value);
                setSenhaUserError(false);
              }}
              className={`${senhaUserError ? "border-red-500" : ""} ${senhaUser === "Senha" ? "text-muted-foreground" : ""}`}
            />
            {senhaUserError && (
              <p className="text-sm text-red-500">
                Por favor, preencha a senha
              </p>
            )}
          </div>

          <div className="space-y-4">
            <Button
              type="submit"
              className="w-full bg-[#0077b6] hover:bg-[#0077b6]/90 text-white"
            >
              Entrar
            </Button>

            <div className="text-right">
              <a
                href="https://idoc.radiomemory.com.br/login/#esqueci-minha-senha"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Esqueci minha senha
              </a>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PatientLogin;
