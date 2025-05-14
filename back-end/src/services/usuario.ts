import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma";

type createUserData = Prisma.Args<typeof prisma.usuario, "create">["data"];

export const createUser = async (data: createUserData) => {
  try {
    return await prisma.usuario.create({
      data,
    });
  } catch (error) {
    return false;
  }
};

export const getUserByCpfAndPassword = async (data: {
  cpf: string;
  password: string;
}) => {
  try {
    return await prisma.usuario.findFirst({
      where: {
        cpf: data.cpf,
        password: data.password,
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        role: true,
      },
    });
  } catch (error) {
    return false;
  }
};
