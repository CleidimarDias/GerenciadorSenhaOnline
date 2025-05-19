"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "O nome deve ter ao menos 3 caracteres",
  }),

  cpf: z.string().min(3, {
    message: "o cpf deve conter 11 numeors",
  }),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

export function FormularioCidadaoGerarSenha() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cpf: "",
    },
  });
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome" {...field} />
              </FormControl>
              <FormDescription>
                Insira o nome completo do cidadão.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input placeholder="CPF" {...field} />
              </FormControl>
              <FormDescription>Digite os números do cpf</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="bg-[#1270b7] w-full" type="submit">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
