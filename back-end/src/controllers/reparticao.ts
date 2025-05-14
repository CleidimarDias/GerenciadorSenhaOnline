import { RequestHandler } from "express";
import z from "zod";
import * as reparticao from "../services/reparticao";

export const createReparticao: RequestHandler = async (req, res) => {
  const ReparticaoSchema = z.object({
    name: z.string().min(1).max(255),
    slug: z.string(),
  });

  const body = ReparticaoSchema.safeParse(req.body);

  if (!body.success) {
    res.status(400).json({ error: body.error.format() });
    return;
  }

  const newReparticao = await reparticao.createReparticao({
    ...body.data,
  });

  if (!newReparticao) {
    res.status(500).json({ error: "Erro ao criar Repartição" });
    return;
  }
  res.status(201).json(newReparticao);
};

export const getAllReparticoes: RequestHandler = async (req, res) => {
  const reparticoes = await reparticao.getAllReparticoes();

  if (!reparticoes) {
    res.status(500).json({ error: "Erro ao buscar Repartições" });
    return;
  }
  res.status(200).json(reparticoes);
};

export const getOneReparticaoBySlug: RequestHandler = async (req, res) => {
  const slugSchema = z.object({
    reparticaoSlug: z.string(),
  });

  const slugParam = slugSchema.safeParse(req.params);

  if (!slugParam.success) {
    res.status(400).json({ error: "slug incorreto" });
    return;
  }

  const findedReparticao = await reparticao.getOneReparticaoBySlug(
    slugParam.data.reparticaoSlug
  );

  if (!findedReparticao) {
    res.status(404).json({ message: "Repartição não encontrada" });
  }

  res.status(200).json(findedReparticao);
};
