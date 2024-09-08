-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "perfilUsuario" "Estado" NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_username_key" ON "Usuarios"("username");
