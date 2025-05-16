import { getReparticao } from "@/data/get-reparticao";
import { getAllServicos } from "@/data/getAllServicos";
import { CategoriaServico } from "@/types/typesServicos";
import { notFound } from "next/navigation";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
//import { Button } from "@/components/ui/button";

interface TriagemProps {
  slug: string;
}

interface ReparticaoProps {
  name: string;
  id: string;
}

export default async function Triagem({ slug }: TriagemProps) {
  const reparticao: ReparticaoProps = await getReparticao(slug);

  if (!reparticao) {
    notFound();
  }

  const servicos: CategoriaServico[] = await getAllServicos(reparticao.id);

  if (!servicos) {
    notFound();
  }

  console.log(
    "Serviços: ",
    servicos[0].name
    // servicos.servicos.map((ser) => ser.name)
  );

  return (
    <div className="h-screen w-screen flex flex-col ">
      <div className="flex justify-between  p-10 text-3xl text-gray-50 bg-[#075ca1]">
        <h3>Triagem</h3>

        <h3>{slug}s</h3>
      </div>

      <div className="flex gap- h-full   items-center justify-center">
        <div className=" flex w-full justify-around">
          {servicos &&
            servicos.map((servico) => {
              return (
                <div key={servico.id} className="">
                  <Card className=" w-full   h-full text-center ">
                    <CardHeader className="text-2xl p-5">
                      {servico.name}
                    </CardHeader>
                    <CardContent>
                      <Button>Gerar senha</Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
