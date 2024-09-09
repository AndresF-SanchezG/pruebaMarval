/*
  Warnings:

  - Changed the type of `Tipo_de_Proveedor` on the `Proveedores` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `Tipo_de_Persona` on the `Proveedores` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Proveedor" AS ENUM ('NACIONAL', 'EXTRANJERO');

-- CreateEnum
CREATE TYPE "Persona" AS ENUM ('NATURAL', 'JURIDICA');

-- AlterTable
ALTER TABLE "Proveedores" DROP COLUMN "Tipo_de_Proveedor",
ADD COLUMN     "Tipo_de_Proveedor" "Proveedor" NOT NULL,
DROP COLUMN "Tipo_de_Persona",
ADD COLUMN     "Tipo_de_Persona" "Persona" NOT NULL;

-- DropEnum
DROP TYPE "TipoPersona";

-- DropEnum
DROP TYPE "TipoProveedor";
