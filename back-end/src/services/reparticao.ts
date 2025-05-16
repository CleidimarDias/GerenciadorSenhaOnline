import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma";

type createReparticaoData = Prisma.Args<
  typeof prisma.reparticao,
  "create"
>["data"];

export const createReparticao = async (data: createReparticaoData) => {
  try {
    return await prisma.reparticao.create({
      data,
    });
  } catch (error) {
    return false;
  }
};

export const getAllReparticoes = async () => {
  try {
    return await prisma.reparticao.findMany({
      include: {
        usuarios: true,
      },
    });
  } catch (error) {
    return false;
  }
};

export const getOneReparticaoBySlug = async (reparticaoSlug: string) => {
  try {
    return await prisma.reparticao.findFirst({
      where: {
        slug: reparticaoSlug,
      },
      select: {
        name: true,
        id: true,
      },
    });
  } catch (error) {
    return false;
  }
};
