import { RequestHandler } from "express";
import z from "zod";
import * as guiche from "../services/guiche";

export const createGuiche: RequestHandler = async (req, res) => {
  const guicheSchemaParams = z.object({
    reparticaoId: z.string().uuid(),
  });

  const params = guicheSchemaParams.safeParse(req.params);

  if (!params.success) {
    res.status(400).json({ error: params.error.format() });
    return;
  }

  const guicheSchemaBody = z.object({
    name: z.string().min(1).max(255),
  });

  const body = guicheSchemaBody.safeParse(req.body);

  if (!body.success) {
    res.status(400).json({ error: body.error.format() });
    return;
  }

  const newGuiche = await guiche.createGuiche({ ...body.data, ...params.data });

  if (!newGuiche) {
    res.status(500).json({ error: "Erro ao criar Guiche" });
    return;
  }
  res.status(201).json(newGuiche);
};

// export const getAllReparticoes: RequestHandler = async (req, res) => {
//   const reparticoes = await reparticao.getAllReparticoes();

//   if (!reparticoes) {
//     res.status(500).json({ error: "Erro ao buscar Repartições" });
//     return;
//   }
//   res.status(200).json(reparticoes);
// };
