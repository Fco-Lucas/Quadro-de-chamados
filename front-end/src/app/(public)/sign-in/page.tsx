"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";

const loginSchema = z.object({
  cpf: z.string().min(11, { message: "O CPF deve ter 11 caracteres" }),
  password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function SignIn() {
  const { login, loading, error } = useAuth();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function sendLogin(data: LoginSchema) {
    const success = await login(data);
    if (success) {
      toast.success("Login realizado com sucesso!");
      router.push("/");
      reset();
    } else {
      const errorMessage = error || "Erro ao realizar login";
      console.log(`Erro ao realizar login: ${errorMessage}`);
      toast.error(errorMessage);
    }
  }

  return (
    <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Caso não possua uma conta:{" "}
          <a
            className="text-blue-400 underline decoration-1 cursor-pointer"
            onClick={() => router.push("/registerAdmin")}
          >
            Criar conta
          </a>
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(sendLogin)}>
        <CardContent>
          <div className="grid grid-cols-12 gap-3 mb-3">
            <div className="col-span-12 space-y-2">
              <Label htmlFor="cpf">CPF:</Label>
              <Input id="cpf" autoComplete="off" type="text" {...register("cpf")} />
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
          <Button variant="default" className="w-full cursor-pointer" type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}