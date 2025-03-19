"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import apiServer from "@/lib/apiServer"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

const loginSchema = z.object({
  cpf: z.string().min(11, { message: "O CPF deve ter 11 caracteres" }),
  password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
})

type LoginSchema = z.infer<typeof loginSchema>

export function LoginForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  })

  const router = useRouter();

  async function onSubmit(data: LoginSchema) {
    try {
      const resp = await apiServer<{ token: string }>("POST", "/auth", {
        body: JSON.stringify(data)
      });
      Cookies.set("authToken", resp.token, { expires: 1 })
      router.push("/")
    } catch (err: any) {
      console.error(`Erro ao realizar login: ${err.message}`)
      toast.error(err.message)
    }
  }

  return (
    <Card className="w-full max-w-md p-6">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Login</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="grid grid-cols-12 gap-3 mb-3">
            <div className="col-span-12 space-y-2">
              <Label htmlFor="cpf">CPF:</Label>
              <Input id="cpf" autoComplete="off" type="text" {...register("cpf")} maxLength={11} />
              {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf.message}</p>}
            </div>
            <div className="col-span-12 space-y-2">
              <Label htmlFor="password">Senha:</Label>
              <Input id="password" autoComplete="off" type="password" {...register("password")} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button variant="default" className="w-full cursor-pointer" type="submit">
            Entrar
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}