/*
  Warnings:

  - The values [PENDENTE] on the enum `SenhaStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SenhaStatus_new" AS ENUM ('ATENDIDA', 'EM_ATENDIMENTO', 'CANCELADA');
ALTER TABLE "Senha" ALTER COLUMN "senhaStatus" TYPE "SenhaStatus_new" USING ("senhaStatus"::text::"SenhaStatus_new");
ALTER TYPE "SenhaStatus" RENAME TO "SenhaStatus_old";
ALTER TYPE "SenhaStatus_new" RENAME TO "SenhaStatus";
DROP TYPE "SenhaStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Senha" ALTER COLUMN "senhaStatus" SET DEFAULT 'EM_ATENDIMENTO';
