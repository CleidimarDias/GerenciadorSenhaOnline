import { RequestHandler } from "express";
import z from "zod";
import * as servico from "../services/servico";

export const createServico: RequestHandler = async (req, res) => {
  const { reparticaoId } = req.params;

  const servicoSchema = z.object({
    name: z.string().min(1).max(255),
    slug: z.string().min(1).max(255),
  });

  const body = servicoSchema.safeParse(req.body);

  if (!body.success) {
    res.status(400).json({ error: body.error.format() });
    return;
  }

  const newServico = await servico.createServico({
    ...body.data,
    reparticaoId: reparticaoId,
  });

  if (!newServico) {
    res.status(500).json({ error: "Erro ao criar Serviço" });
    return;
  }
  res.status(201).json(newServico);
};

export const getServicoById: RequestHandler = async (req, res) => {
  const servicoSchema = z.object({
    servicoId: z.string().min(1).max(255),
  });

  const body = servicoSchema.safeParse(req.params);

  if (!body.success) {
    res.status(400).json({ error: body.error.format() });
    return;
  }

  const servicoData = await servico.getServicoById(body.data.servicoId);

  if (!servicoData) {
    res.status(500).json({ error: "Erro ao buscar Serviço" });
    return;
  }
  res.status(200).json(servicoData);
};
