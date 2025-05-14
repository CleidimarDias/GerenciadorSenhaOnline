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
