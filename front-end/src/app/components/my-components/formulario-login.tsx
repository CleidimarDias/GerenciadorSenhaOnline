"use client";
// import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { setCookie } from "cookies-next";
// import { cookies } from "next/headers";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "../ui/button";
import { getLogin } from "@/data/get-login";
import { useUser } from "@/app/contexts/testeContext";
import { useEffect } from "react";

const cpfRegexComFormatacao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const removerPontosTracosRegex = /[.-]/g;

// interface ILogedUser {
//   token: string
//   UserLogin: {
//     id: string;
//   name: string;
//   cpf: string;
//   role: string;
//   }
// }

const formSchema = z.object({
  cpf: z
    .string()
    .regex(cpfRegexComFormatacao, {
      message: "CPF inválido (formato esperado: XXX.XXX.XXX-XX)",
    })
    .transform((valor) => valor.replace(removerPontosTracosRegex, "")),
  password: z
    .string()
    .min(6, { message: "A senha deve conter no mínimo 6 caracteres" }),
});

export default function FormularioLogin() {
  //const [isLogged, setIsLogged] = useState(false)
  const { MudarPalavra, palavra } = useUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await getLogin(values);

    if (result) {
      console.log("Login bem sucedido");
      setCookie("token", result.token);

      // console.log(result.token);
    } else {
      console.error("CPF ou Senha incorretos");
    }

    // console.log(values);
  }

  const handleTeste = () => {
    MudarPalavra("palavra mudada");
  };

  useEffect(() => {
    console.log("A palavra mudou");
  }, [palavra]);

  console.log("palavra mudada do formulario: ", palavra);
  return (
    <div className="flex flex-col">
      <Card className=" text-[#1270b7] border-[#1270b7]">
        <CardHeader>
          <CardTitle className="text-[#1270b7] text-3xl">LOGIN</CardTitle>
          <CardDescription className="text-[#1270b7]">
            Faça seu login para acessar ao gerênciador de senhas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem className="text-2xl">
                    <FormLabel className="text-xl">cpf</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu cpf..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Senha</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite sua senha..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="bg-[#1270b7] w-full text-2xl h-fit">
                Enviar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Button onClick={handleTeste}>teste</Button>
    </div>
  );
}
