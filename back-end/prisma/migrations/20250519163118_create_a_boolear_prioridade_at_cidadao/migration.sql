/*
  Warnings:

  - You are about to drop the column `prioridade` on the `Senha` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cidadao" ADD COLUMN     "prioridade" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Senha" DROP COLUMN "prioridade";

-- DropEnum
DROP TYPE "Prioridades";
