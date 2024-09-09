/*
  Warnings:

  - The values [NATURAL] on the enum `TipoProveedor` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TipoProveedor_new" AS ENUM ('NACIONAL', 'EXTRANJERO');
ALTER TABLE "Proveedores" ALTER COLUMN "Tipo_de_Proveedor" TYPE "TipoProveedor_new" USING ("Tipo_de_Proveedor"::text::"TipoProveedor_new");
ALTER TYPE "TipoProveedor" RENAME TO "TipoProveedor_old";
ALTER TYPE "TipoProveedor_new" RENAME TO "TipoProveedor";
DROP TYPE "TipoProveedor_old";
COMMIT;
