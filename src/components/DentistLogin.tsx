import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const DentistLogin = () => {
  const [email, setEmail] = useState("E-mail");
  const [senha, setSenha] = useState("Senha");
  const [emailError, setEmailError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);
  const [senhaType, setSenhaType] = useState<"text" | "password">("text");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let hasError = false;

    if (!email.trim() || email === "E-mail") {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (!senha.trim() || senha === "Senha") {
      setSenhaError(true);
      hasError = true;
    } else {
      setSenhaError(false);
    }

    if (hasError) {
      e.preventDefault();
    }
  };

  return (
    <Card className="border-2 h-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl">
          Área do Dentista
        </CardTitle>
      </CardHeader>
      <CardContent>
              <form
                method="POST"
                action="https://idoc.radiomemory.com.br/login.php?go=clinica&retorno=centrodeimagens.radiomemory.com.br"
                target="_top"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    onFocus={() => {
                      if (email === "E-mail") setEmail("");
                    }}
                    onBlur={() => {
                      if (email === "") setEmail("E-mail");
                    }}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(false);
                    }}
                    className={`${emailError ? "border-red-500" : ""} ${email === "E-mail" ? "text-muted-foreground" : ""}`}
                  />
                  {emailError && (
                    <p className="text-sm text-red-500">
                      Por favor, preencha o e-mail
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="senha" className="text-foreground">
                    Senha
                  </Label>
                  <Input
                    id="senha"
                    name="senha"
                    type={senhaType}
                    value={senha}
                    onFocus={() => {
                      if (senha === "Senha") {
                        setSenha("");
                        setSenhaType("password");
                      }
                    }}
                    onBlur={() => {
                      if (senha === "") {
                        setSenha("Senha");
                        setSenhaType("text");
                      }
                    }}
                    onChange={(e) => {
                      setSenha(e.target.value);
                      setSenhaError(false);
                    }}
                    className={`${senhaError ? "border-red-500" : ""} ${senha === "Senha" ? "text-muted-foreground" : ""}`}
                  />
                  {senhaError && (
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

export default DentistLogin;
