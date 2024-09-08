-- CreateEnum
CREATE TYPE "Estado" AS ENUM ('APROBADO', 'RECHAZADO', 'PENDIENTE');

-- CreateTable
CREATE TABLE "Proveedores" (
    "id" SERIAL NOT NULL,
    "Nit" TEXT NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Apellido" TEXT NOT NULL,
    "Cedula" INTEGER NOT NULL,
    "Tipo_de_Proveedor" TEXT NOT NULL,
    "Tipo_de_Persona" TEXT NOT NULL,
    "Banco" TEXT NOT NULL,
    "NumeroCuenta" INTEGER NOT NULL,
    "TipoCuenta" TEXT NOT NULL,
    "Socios" TEXT NOT NULL,
    "Estado" "Estado" NOT NULL,

    CONSTRAINT "Proveedores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proveedores_Nit_key" ON "Proveedores"("Nit");
