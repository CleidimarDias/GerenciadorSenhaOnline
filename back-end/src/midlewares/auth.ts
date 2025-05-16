import { RequestHandler, Request } from "express";

// Extend the Request interface to include the 'user' property
declare module "express-serve-static-core" {
  interface Request {
    user?: any;
  }
}
import JWT from "jsonwebtoken";

export const auth: RequestHandler = async (req, res, next) => {
  let sucesso = false;
  const key = process.env.JWT_SECRET_KEY;
  const Bearer = "Bearer";

  const authReader = req.headers.authorization;

  if (req.headers.authorization) {
    const [authType, token] = req.headers.authorization.split(" ");

    if (authType === Bearer) {
      try {
        const decoded = JWT.verify(token, key as string);
        req.user = decoded as any;
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
