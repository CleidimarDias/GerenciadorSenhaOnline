import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma";
import { getServicoById } from "./servico";

type createSenha = Prisma.Args<typeof prisma.senha, "create">["data"];

// export const createSenha = async (data: createSenha) => {
//   try {
//     return await prisma.senha.create({
//       data,
//     });
//   } catch (error) {
//     return false;
//   }
// };

export const createSenha = async (data: createSenha) => {
  try {
    const ultimaSenha = await prisma.senha.findFirst({
      where: { servicoId: data.servicoId },
      orderBy: { numeroOrdem: "desc" },
    });

    const numeroOrdem = ultimaSenha ? ultimaSenha.numeroOrdem + 1 : 1; // Incrementa o número da senha

    if (!data.servicoId) {
      throw new Error("Servico ID is required");
    }

    if (!data.cidadaoId) {
      throw new Error("Cidadão ID is required");
    }

    const servico = await getServicoById(data.servicoId); // Obtém o serviço pelo ID
    let slug = "";
    if (servico) {
      slug = servico.slug; // Obtém o slug do serviço
    }

    const senhaCriada = await prisma.senha.create({
      data: {
        ...data,
        servicoId: data.servicoId,
        senha: `${slug}-${numeroOrdem}`,
        numeroOrdem,
        cidadaoId: data.cidadaoId, // Assign the citizen ID directly if the schema expects a direct relation
      },
      include: {
        cidadao: {
          select: {
            cpf: true,
            name: true,
          },
        }, // Inclui os dados do cidadão na resposta
      },
    });
    return senhaCriada;
  } catch (error) {
    console.error("Error fetching last senha:", error);
    return false;
  }
};

// ------------------------------------------------PROXIMA SENHA---------------------------------------------------
// Chama a próxima senha para atendimento, considerando as prioridades e o guichê
interface ProximaSenhaData {
  servicoId: string; // ID do serviço associado à senha
  usuarioId: string; // ID do usuário que está chamando a senha
  //cidadaoId: string; // ID do cidadão associado à senha
  guicheId: string; // ID do guichê onde a senha será atendida
}

export const chamarProximaSenha = async (data: ProximaSenhaData) => {
  interface SenhaAtualizada {
    id: number;
    status: "PENDENTE" | "ATENDIDA" | "EM_ATENDIMENTO" | "CANCELADA";
    guicheId: string | null;
    usuarioId: string | null;
    cidadao: {
      cpf: string;
      name: string;
    } | null;
    guiche: {
      name: string;
    } | null;
    servico: {
      name: string;
    } | null;
  }

  let senhaAtualizada: SenhaAtualizada | null = null;

  try {
    // Busca ou cria o contador para o serviço
    let contador = await prisma.contadorPrioridade.findUnique({
      where: { servicoId: data.servicoId },
    });

    if (!contador) {
      contador = await prisma.contadorPrioridade.create({
        data: { servicoId: data.servicoId },
      });
    }

    if (contador.quantidade < 2) {
      // Tenta buscar uma senha prioritária
      const proximaSenha = await prisma.senha.findFirst({
        where: {
          servicoId: data.servicoId,
          status: "PENDENTE",
          prioridade: "PRIORITARIO",
        },
        orderBy: { numeroOrdem: "asc" },
      });

      if (proximaSenha) {
        // Atualiza contador no banco
        await prisma.contadorPrioridade.update({
          where: { servicoId: data.servicoId },
          data: { quantidade: contador.quantidade + 1 },
        });

        senhaAtualizada = await prisma.senha.update({
          where: { id: proximaSenha.id },
          data: {
            status: "EM_ATENDIMENTO",
            guicheId: data.guicheId,
            usuarioId: data.usuarioId,
          },
          include: {
            cidadao: {
              select: {
                cpf: true,
                name: true,
              },
            },
            guiche: {
              select: {
                name: true,
              },
            },
            servico: {
              select: {
                name: true,
              },
            },
          },
        });

        return senhaAtualizada;
      }
    }

    // Se já atendeu 2 prioritárias ou não achou nenhuma prioritária, chama não prioritária
    const proximaSenha = await prisma.senha.findFirst({
      where: {
        servicoId: data.servicoId,
        status: "PENDENTE",
        prioridade: "NAO_PRIORITARIO",
      },
      orderBy: { numeroOrdem: "asc" },
    });

    if (proximaSenha) {
      console.log("Entrou no próxima senha!!!!!!!!");
      // Zera o contador de prioritários
      await prisma.contadorPrioridade.update({
        where: { servicoId: data.servicoId },
        data: { quantidade: 0 },
      });

      senhaAtualizada = await prisma.senha.update({
        where: { id: proximaSenha.id },
        data: {
          status: "EM_ATENDIMENTO",
          guicheId: data.guicheId,
          usuarioId: data.usuarioId,
        },
        include: {
          cidadao: {
            select: {
              cpf: true,
              name: true,
            },
          },
          guiche: {
            select: {
              name: true,
            },
          },
          servico: {
            select: {
              name: true,
            },
          },
          usuario: {
            select: {
              name: true,
            },
          },
        },
      });
    }

    return senhaAtualizada;
  } catch (error) {
    console.error("Erro ao chamar próxima senha:", error);
    return null;
  }
};

//UPDATE SENHA

interface UpdateSenhaData {
  senhaId?: number;
  guicheId?: string;
  usuarioId?: string;
  status?: "PENDENTE" | "ATENDIDA" | "EM_ATENDIMENTO" | "CANCELADA";
} // ID da senha a ser atualizada

export const updateSenha = async (data: UpdateSenhaData) => {
  if (!data.senhaId) {
    throw new Error("Senha ID is required");
  }
  try {
    const senhaAtualizada = await prisma.senha.update({
      where: { id: data.senhaId },
      data: {
        ...(data.guicheId && { guicheId: data.guicheId }),
        ...(data.usuarioId && { usuarioId: data.usuarioId }),
        ...(data.status && { status: data.status }),
      },
    });
    return senhaAtualizada;
  } catch (error) {
    console.error("Error fetching updateSenha senha:", error);
    return false;
  }
};
