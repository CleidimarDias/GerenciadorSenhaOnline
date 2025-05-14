import { RequestHandler } from "express";
import JWT from "jsonwebtoken";

export const auth: RequestHandler = async (req, res, next) => {
  let sucesso = false;
  const key = process.env.JWT_SECRET_KEY;
  const Bearer = "Bearer";

  if (req.headers.authorization) {
    const [authType, token] = req.headers.authorization.split(" ");

    if (authType === Bearer) {
      try {
        const decoded = JWT.verify(token, key as string);
        console.log(decoded);
        sucesso = true;
      } catch (error) {
        console.log("Erro", "Erro no JWT");
      }
    }
  }

  if (sucesso) {
    next();
  } else {
    res.status(403).json({ message: "Usuário Não autorizado" });
  }
};
