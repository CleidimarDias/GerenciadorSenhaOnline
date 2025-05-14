/*
  Warnings:

  - The `prioridade` column on the `Senha` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `cidadaoId` to the `Senha` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guicheId` to the `Senha` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroOrdem` to the `Senha` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Senha` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Prioridades" AS ENUM ('NAO_PRIORITARIO', 'PRIORITARIO', 'IDOSO_ACIMA_DE_80_ANOS');

-- AlterTable
ALTER TABLE "Senha" ADD COLUMN     "cidadaoId" TEXT NOT NULL,
ADD COLUMN     "guicheId" TEXT NOT NULL,
ADD COLUMN     "numeroOrdem" INTEGER NOT NULL,
ADD COLUMN     "usuarioId" TEXT NOT NULL,
DROP COLUMN "prioridade",
ADD COLUMN     "prioridade" "Prioridades" NOT NULL DEFAULT 'NAO_PRIORITARIO';

-- CreateTable
CREATE TABLE "Guiche" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "reparticaoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guiche_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cidadao" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cidadao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cidadao_cpf_key" ON "Cidadao"("cpf");

-- AddForeignKey
ALTER TABLE "Guiche" ADD CONSTRAINT "Guiche_reparticaoId_fkey" FOREIGN KEY ("reparticaoId") REFERENCES "Reparticao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Senha" ADD CONSTRAINT "Senha_guicheId_fkey" FOREIGN KEY ("guicheId") REFERENCES "Guiche"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Senha" ADD CONSTRAINT "Senha_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Senha" ADD CONSTRAINT "Senha_cidadaoId_fkey" FOREIGN KEY ("cidadaoId") REFERENCES "Cidadao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
