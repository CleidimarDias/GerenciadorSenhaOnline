-- CreateTable
CREATE TABLE "ContadorPrioridade" (
    "id" SERIAL NOT NULL,
    "servicoId" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContadorPrioridade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContadorPrioridade_servicoId_key" ON "ContadorPrioridade"("servicoId");

-- AddForeignKey
ALTER TABLE "ContadorPrioridade" ADD CONSTRAINT "ContadorPrioridade_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
