/*
  Warnings:

  - Added the required column `slug` to the `Servico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Servico" ADD COLUMN     "slug" TEXT NOT NULL;
