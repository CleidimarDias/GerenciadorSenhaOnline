/*
  Warnings:

  - You are about to drop the column `senhaStatus` on the `Senha` table. All the data in the column will be lost.
  - Added the required column `role` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "SenhaStatus" ADD VALUE 'PENDENTE';

-- AlterTable
ALTER TABLE "Senha" DROP COLUMN "senhaStatus";

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "role" TEXT NOT NULL;
