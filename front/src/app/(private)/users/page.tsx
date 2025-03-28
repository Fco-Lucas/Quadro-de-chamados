import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search, PlusCircle, Pen, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { usersList } from "@/app/(public)/sign-in/userslist";

export default function Users() {
  return(
    <main className="p-4 sm:p-6 w-full max-w-full overflow-x-hidden">
      <p className="text-2xl font-bold mb-3">Usuários</p>
      <header className="w-full mb-3">
        {/* Container principal - flex em todas as telas */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 w-full">
          
          {/* Formulário - comportamento responsivo */}
          <form className="w-full md:w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-2">
              {/* Nome - linha inteira mobile, depois automático */}
              <div className="col-span-1 sm:col-span-2 md:w-auto">
                <Input name="name" placeholder="Nome" className="min-w-[150px]" autoComplete="off" />
              </div>

              {/* CPF - metade mobile, automático desktop */}
              <div className="col-span-1 md:w-auto">
                <Input name="cpf" placeholder="CPF" className="min-w-[150px]" />
              </div>

              {/* Select - metade mobile, automático desktop */}
              <div className="col-span-1 md:w-auto">
                <Select>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Cargo" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Cargos</SelectLabel>
                        <SelectItem value="todos">Todos</SelectItem>
                        <SelectItem value="user">Usuário</SelectItem>
                        <SelectItem value="supervisor">Supervisor</SelectItem>
                        <SelectItem value="admin">Administrador</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                </Select>
              </div>

              {/* Botão Filtrar - linha inteira mobile, automático desktop */}
              <div className="col-span-1 sm:col-span-2 md:w-auto">
                <Button className="w-full md:w-auto" variant="ghost" type="submit">
                  <Search className="w-4 h-4" />
                  Filtrar resultados
                </Button>
              </div>
            </div>
          </form>

          {/* Botão Novo Usuário - sempre à direita */}
          <div className="w-full md:w-auto">
            <Dialog>
              <DialogTrigger asChild>
                  <Button type="button" className="cursor-pointer w-full md:w-auto" variant="default">
                    <PlusCircle className="w-4 h-4" />
                    Novo usuário
                  </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] md:max-w-1/4">
                <DialogHeader>
                  <DialogTitle>Novo usuário</DialogTitle>
                  <DialogDescription>Preencha as informações e clique no botão 'Cadastrar usuário'</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">Nome</Label>
                    <Input type="text" name="name" className="col-span-3" autoComplete="off" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="cpf" className="text-right">CPF</Label>
                    <Input type="text" name="cpf" className="col-span-3" autoComplete="off" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">Senha</Label>
                    <Input type="password" name="password" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="role" className="text-right">Cargo</Label>
                    <div className="col-span-3">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Cargo do usuário" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Cargos</SelectLabel>
                            <SelectItem value="user">Usuário</SelectItem>
                            <SelectItem value="supervisor">Supervisor</SelectItem>
                            <SelectItem value="admin">Administrador</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Cadastrar usuário</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
      <section>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nome</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usersList.map(user => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.cpf}</TableCell>
              <TableCell>{user.userRole}</TableCell>
              <TableCell className="text-center">
                <Button type="button" className="cursor-pointer me-2" variant={"default"}>
                  <Pen className="w-3 h-3" />
                </Button>
                <Button type="button" className="cursor-pointer" variant={"destructive"}>
                  <Trash2 className="w-3 h-3" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
      </section>
    </main>
  )
}