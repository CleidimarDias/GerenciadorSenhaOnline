-- DropForeignKey
ALTER TABLE "Senha" DROP CONSTRAINT "Senha_guicheId_fkey";

-- AlterTable
ALTER TABLE "Senha" ALTER COLUMN "guicheId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Senha" ADD CONSTRAINT "Senha_guicheId_fkey" FOREIGN KEY ("guicheId") REFERENCES "Guiche"("id") ON DELETE SET NULL ON UPDATE CASCADE;
