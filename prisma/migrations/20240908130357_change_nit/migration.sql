/*
  Warnings:

  - Changed the type of `Nit` on the `Proveedores` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Proveedores" DROP COLUMN "Nit",
ADD COLUMN     "Nit" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Proveedores_Nit_key" ON "Proveedores"("Nit");
