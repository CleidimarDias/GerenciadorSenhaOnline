import { Router } from "express";
import * as pingController from "../controllers/ping";
import { create } from "domain";
import {
  createReparticao,
  getAllReparticoes,
  getOneReparticaoBySlug,
} from "../controllers/reparticao";
import { createUser, getUserByCpfAndPassword } from "../controllers/usuario";
import {
  createServico,
  getAllServicos,
  getServicoById,
} from "../controllers/servico";
import {
  chamarProximaSenha,
  createSenha,
  getAllPendingSenhas,
  getAllSenhas,
} from "../controllers/senha";
import { createCidadao } from "../controllers/cidadao";
import { createGuiche, getAllGuiches } from "../controllers/guiche";
import { login } from "../controllers/login";
import { auth } from "../midlewares/auth";
import { me } from "../controllers/authMe";

export const mainRouter = Router();

mainRouter.get("/ping", pingController.ping);

mainRouter.post("/reparticao", createReparticao);
mainRouter.get("/reparticao", getAllReparticoes);
mainRouter.get(
  "/reparticao/reparticaoSlug/:reparticaoSlug",
  getOneReparticaoBySlug
);
mainRouter.post("/user/reparticaoId/:reparticaoId", createUser);

mainRouter.post("/servico/reparticaoId/:reparticaoId", createServico);
mainRouter.get("/servico/servicoId/:servicoId", getServicoById);
mainRouter.post(
  "/senha/servicoId/:servicoId/cidadaoId/:cidadaoId",
  createSenha
);
mainRouter.get(
  "/reparticao/reparticaoId/:reparticaoId/allServicos",
  getAllServicos
);

mainRouter.post("/cidadao/reparticaoId/:reparticaoId", createCidadao);

mainRouter.post("/guiche/reparticaoId/:reparticaoId", createGuiche);
mainRouter.get("/guiche/reparticaoId/:reparticaoId", getAllGuiches);

mainRouter.post(
  "/senha/servicoId/:servicoId/cidadaoId/:cidadaoId",
  createSenha
);
mainRouter.get(
  "/senha/chamarProximaSenha/reparticaoId/:reparticaoId/servicoId/:servicoId/guicheId/:guicheId/usuarioId/:usuarioId",
  chamarProximaSenha
);

mainRouter.get("/senha/servicoId/:servicoId/", getAllPendingSenhas);
mainRouter.get("/senha/todasAsSenhas/servicoId/:servicoId", getAllSenhas);

mainRouter.post("/user/getUserByCpfAndPassword", getUserByCpfAndPassword);

mainRouter.post("/login", login);

mainRouter.get("/auth/me", auth, me);
