import { Input } from "@/components/ui/input";
import { CustomizeSchemeToogle } from "./_components/customize-scheme-toogle";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <main className="p-4 sm:p-6 w-full max-w-full overflow-x-hidden">
      <header className="flex justify-between items-center mb-3">
        <p className="text-2xl font-bold mb-3">Configurações</p>
        <div className="flex gap-2">
          <CustomizeSchemeToogle />
        </div>
      </header>
      <section>
        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <div className="col-span-1 sm:grid-cols-2 space-y-2">
              <Label htmlFor="name" className="text-base">Nome:</Label>
              <Input type="text" name="name" autoComplete="off" />
            </div>
            <div className="col-span-1 sm:grid-cols-2 space-y-2">
              <Label htmlFor="cpf" className="text-base">CPF:</Label>
              <Input type="text" name="cpf" autoComplete="off" />
            </div>
            <div className="col-span-1 sm:grid-cols-1 space-y-2">
              <p className="text-base font-bold">Senha</p>
            </div>
            <div className="col-span-1 sm:grid-cols-1 space-y-2">
              <div className="flex justify-end">
                <Button variant={"outline"}>Alterar senha</Button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  )
}