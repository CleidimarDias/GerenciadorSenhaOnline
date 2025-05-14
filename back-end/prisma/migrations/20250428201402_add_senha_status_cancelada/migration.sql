/*
  Warnings:

  - You are about to drop the column `slug` on the `Servico` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "SenhaStatus" ADD VALUE 'CANCELADA';

-- AlterTable
ALTER TABLE "Servico" DROP COLUMN "slug";
