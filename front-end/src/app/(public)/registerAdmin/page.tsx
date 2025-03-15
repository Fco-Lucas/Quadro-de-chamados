import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterAdmin() {
  return (
    <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Cadastrar</CardTitle>
        <CardDescription>Ao realizar este cadastro, o usuário cadastrado terá acesso completo a todas as funcionalidades do sistema</CardDescription>
      </CardHeader>
      <form>
        <CardContent>
          <div className="grid grid-cols-12 gap-3 mb-3">
            <div className="col-span-12 space-y-2">
              <Label htmlFor="cpf">CPF:</Label>
              <Input id="cpf" autoComplete="off" type="text" maxLength={11} />
            </div>
            <div className="col-span-12 space-y-2">
              <Label htmlFor="password">Senha:</Label>
              <Input id="password" autoComplete="off" type="password" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="default" className="w-full cursor-pointer" type="submit">Entrar</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
