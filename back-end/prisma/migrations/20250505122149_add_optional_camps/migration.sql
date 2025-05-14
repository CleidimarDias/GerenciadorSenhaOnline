-- DropForeignKey
ALTER TABLE "Senha" DROP CONSTRAINT "Senha_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Senha" ALTER COLUMN "senha" DROP NOT NULL,
ALTER COLUMN "numeroOrdem" SET DEFAULT 1,
ALTER COLUMN "usuarioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Senha" ADD CONSTRAINT "Senha_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
