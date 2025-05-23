import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma";

type createGuicheData = Prisma.Args<typeof prisma.guiche, "create">["data"];

export const createGuiche = async (data: createGuicheData) => {
  try {
    return await prisma.guiche.create({
      data,
    });
  } catch (error) {
    return false;
  }
};

export const getAllGuiches = async (guicheId: string) => {
  try {
    return await prisma.reparticao.findMany({
      where: {
        id: guicheId,
      },
      select: {
        guiches: true,
      },
    });
  } catch (error) {
    console.error({ message: "Erro no banco ao buscar todos guichês" });
  }
};

// export const getAllReparticoes = async () => {
//   try {
//     return await prisma.Guiche.findMany({
//       include: {
//         usuarios: true,
//       },
//     });
//   } catch (error) {
//     return false;
//   }
// };
