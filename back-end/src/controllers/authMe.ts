// src/controllers/authController.ts
import { RequestHandler } from "express";

export const me: RequestHandler = async (req, res) => {
  if (!req.user) {
    res.status(403).json({ message: "Usuário não autenticado" });
    return;
  }

  // Aqui você pode buscar o usuário do banco se quiser, ou só retornar o que veio do token:
  res.status(200).json(req.user);
  return;
};
