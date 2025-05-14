/*
  Warnings:

  - You are about to drop the column `role` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `reparticaoId` to the `Cidadao` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USUARIO');

-- AlterTable
ALTER TABLE "Cidadao" ADD COLUMN     "reparticaoId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "role";

-- AddForeignKey
ALTER TABLE "Cidadao" ADD CONSTRAINT "Cidadao_reparticaoId_fkey" FOREIGN KEY ("reparticaoId") REFERENCES "Reparticao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
