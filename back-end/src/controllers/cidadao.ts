import { RequestHandler } from "express";
import z from "zod";
import * as cidadao from "../services/cidadao";

export const createCidadao: RequestHandler = async (req, res) => {
  const cidadaoSchemaParams = z.object({
    reparticaoId: z.string().min(1).max(255),
  });

  const cidadaoSchema = z.object({
    name: z.string().min(1).max(255),
    cpf: z.string().min(11).max(11),
  });

  const ParamsSchema = cidadaoSchemaParams.safeParse(req.params);
  if (!ParamsSchema.success) {
    res.status(400).json({ error: ParamsSchema.error.format() });
    return;
  }

  const body = cidadaoSchema.safeParse(req.body);

  if (!body.success) {
    res.status(400).json({ error: body.error.format() });
    return;
  }

  const newCidadao = await cidadao.createCidadao({
    ...body.data,
    ...ParamsSchema.data,
  });

  if (!newCidadao) {
    res.status(500).json({ error: "Erro ao criar usuário" });
    return;
  }
  res.status(201).json(newCidadao);
};
