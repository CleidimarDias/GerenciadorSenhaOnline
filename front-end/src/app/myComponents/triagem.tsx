import { getReparticao } from "@/data/get-reparticao";
import { getAllServicos } from "@/data/getAllServicos";
import { CategoriaServico } from "@/types/typesServicos";
import { notFound } from "next/navigation";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
//import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FormularioCidadaoGerarSenha } from "./formularioCidadaoGerarSenha";

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
    <div className="h-screen max-w-screen flex flex-col ">
      <div className="flex justify-around  p-10 text-3xl text-gray-800 font-semibold">
        <h3>Triagem</h3>

        <h3>{slug.toLocaleUpperCase()}</h3>
      </div>

      <div className="h-full flex max-w-screen items-center justify-center  border-2 mx-4 mb-8 rounded-2xl border-[#1270b7]  ">
        <div className=" grid grid-cols-4 gap-10 w-full  mx-8   ">
          {servicos &&
            servicos.map((servico) => {
              return (
                <div key={servico.id} className="  h-full  w-full      ">
                  <Card className=" h-full text-center text-2xl w-full py-10 border-2 border-[#1270b7]    ">
                    <CardHeader className="">{servico.name}</CardHeader>
                    <CardContent>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-[#1270b7] hover:bg-blue-700 text-xl">
                            Gerar senha
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Cidadão</DialogTitle>
                            <DialogDescription>
                              Preêncha os dados do cidadão
                            </DialogDescription>
                          </DialogHeader>
                          <div className=" py-4 ">
                            <div className=" items-center gap-4">
                              <FormularioCidadaoGerarSenha />
                              {/* <Label htmlFor="name" className="text-right">
                                Nome:
                              </Label>
                              <Input
                                id="name"
                                value="Pedro Duarte"
                                className="col-span-3"
                              /> */}
                            </div>
                            {/* <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="username" className="text-right">
                                CPF
                              </Label>
                              <Input
                                id="username"
                                value="@peduarte"
                                className="col-span-3"
                              />
                            </div> */}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>

      {/* <div className="h-full flex max-w-screen items-center justify-center  border-2 mx-4 mb-8 rounded-2xl border-[#1270b7]  ">
        <div className=" grid grid-cols-4 gap-10 w-full  mx-8   ">
          {servicos &&
            servicos.map((servico) => {
              return (
                <div key={servico.id} className="  h-full  w-full      ">
                  <Card className=" h-full text-center text-2xl w-full py-10 border-2 border-[#1270b7]    ">
                    <CardHeader className="">{servico.name}</CardHeader>
                    <CardContent>
                      <Button className="bg-[#1270b7] hover:bg-blue-700 text-xl">
                        Gerar senha
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
        </div>
      </div> */}
    </div>

    //  <div className=" flex md:flex-row flex-col max-w-screen h-full  justify-around items-center gap-4 mr-4 ml-4">
    //     {servicos &&
    //       servicos.map((servico) => {
    //         return (
    //           <div key={servico.id} className="  h-1/3  w-full flex    ">
    //             <Card className=" h-full text-center text-2xl w-full  ">
    //               <CardHeader className="">{servico.name}</CardHeader>
    //               <CardContent>
    //                 <Button>Gerar senha</Button>
    //               </CardContent>
    //             </Card>
    //           </div>
    //         );
    //       })}
    //   </div>
    // </div>
  );
}
