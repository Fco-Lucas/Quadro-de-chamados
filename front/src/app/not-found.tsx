"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter()

  return (
    <main className="h-dvh w-full flex flex-col gap-7 justify-center items-center">
      <div className="flex flex-col gap-1 text-center">
        <p className="text-4xl">404</p>
        <p className="text-2xl">Página não encontrada</p>
      </div>
      <Button className="cursor-pointer" variant={"default"} onClick={() => { router.push("/") }}>Voltar para página inicial</Button>
    </main>
  )
}