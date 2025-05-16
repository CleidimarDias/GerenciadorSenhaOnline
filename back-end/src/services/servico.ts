import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma";

type createServicoData = Prisma.Args<typeof prisma.servico, "create">["data"];

export const createServico = async (data: createServicoData) => {
  try {
    return await prisma.servico.create({
      data,
    });
  } catch (error) {
    return false;
  }
};

export const getServicoById = async (servicoId: string) => {
  try {
    return await prisma.servico.findUnique({
      where: { id: servicoId },
    });
  } catch (error) {
    return false;
  }
};

export const getAllServios = async (reparticaoId: string) => {
  try {
    return await prisma.servico.findMany({
      where: {
        reparticaoId: reparticaoId,
      },
    });
  } catch (error) {
    return false;
  }
};

// export const getAllServios = async (reparticaoId: string) => {
//   try {
//     return await prisma.reparticao.findMany({
//       where: {
//         id: reparticaoId,
//       },
//       include: {
//         servicos: true,
//       },
//     });
//   } catch (error) {
//     return false;
//   }
// };
