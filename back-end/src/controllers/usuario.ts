import { RequestHandler } from "express";
import z from "zod";
import * as user from "../services/usuario";
import JWT from "jsonwebtoken";

export const createUser: RequestHandler = async (req, res) => {
  const { reparticaoId } = req.params;

  const userSchema = z.object({
    name: z.string().min(1).max(255),
    cpf: z.string(),
    password: z.string().min(6).max(255),
  });

  const body = userSchema.safeParse(req.body);

  if (!body.success) {
    res.status(400).json({ error: body.error.format() });
    return;
  }

  const newUser = await user.createUser({
    ...body.data,
    reparticaoId: reparticaoId,
  });

  if (!newUser) {
    res.status(500).json({ error: "Erro ao criar usuário" });
    return;
  }
  res.status(201).json(newUser);
};

//GET ONE USER BY CPF AND PASSWORD

export const getUserByCpfAndPassword: RequestHandler = async (req, res) => {
  const userSchema = z.object({
    cpf: z.string(),
    password: z.string(),
  });

  const body = userSchema.safeParse(req.body);

  if (!body.success) {
    res.status(400).json({ message: "Erro ao passar os dados do body" });
    return;
  }

  const userData = await user.getUserByCpfAndPassword({
    ...body.data,
  });

  if (!userData) {
    res.status(500).json({ error: "Usuário ou senha incorretos" });
    return;
  }

  const key = process.env.JWT_SECRET_KEY;

  const token = JWT.sign(
    {
      id: userData.id,
      cpf: userData.cpf,
      name: userData.name,
      role: userData.role,
    },
    key as string,
    { expiresIn: "8h" }
  );

  console.log("token", token);

  res.status(200).json({ userData, token });
};
