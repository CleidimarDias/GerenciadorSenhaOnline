import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma";

type createCidadaoData = Prisma.Args<typeof prisma.cidadao, "create">["data"];

export const createCidadao = async (data: createCidadaoData) => {
  try {
    return await prisma.cidadao.create({
      data,
    });
  } catch (error) {
    return false;
  }
};
