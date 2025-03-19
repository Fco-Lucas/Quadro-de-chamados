"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import apiServer from "@/lib/apiServer";
import type { UserInterface } from "@/types/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }).max(255),
  cpf: z.string().min(11, { message: "O CPF deve ter 11 caracteres" }),
  password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
})

type RegisterSchema = z.infer<typeof registerSchema>

export function RegisterAdminForm() {
  const router = useRouter()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema)
  })

  async function onSubmit(data: RegisterSchema) {
    try {
      const resp = await apiServer<UserInterface>("POST", "/users/createAdmin", {
        body: JSON.stringify(data)
      })
      toast.success("Super administrador criado com sucesso!")
      router.push("/sign-in")
    } catch (err: any) {
      console.error(`Erro ao cadastrar administrador: ${err.message}`)
      toast.error(err.message)
    }
  }

  return (
    <Card className="w-full max-w-md p-6">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Cadastrar</CardTitle>
        <CardDescription>Ao realizar este cadastro, o usuário cadastrado terá acesso completo a todas as funcionalidades do sistema</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="grid grid-cols-12 gap-3 mb-3">
            <div className="col-span-12 space-y-2">
              <Label htmlFor="name">Nome:</Label>
              <Input id="name" autoComplete="off" type="text" maxLength={255} {...register("name")} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="col-span-12 space-y-2">
              <Label htmlFor="cpf">CPF:</Label>
              <Input id="cpf" autoComplete="off" type="text" maxLength={11} {...register("cpf")} />
              {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf.message}</p>}
            </div>
            <div className="col-span-12 space-y-2">
              <Label htmlFor="password">Senha:</Label>
              <Input id="password" autoComplete="off" type="password" maxLength={255} {...register("password")} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button variant="default" className="w-full cursor-pointer" type="submit">
            Cadastrar
          </Button>
          <a className="text-sm text-blue-400 decoration-1 cursor-pointer" onClick={() => router.push("/")}>Acessar página inicial</a>
        </CardFooter>
      </form>
    </Card>
  )
}