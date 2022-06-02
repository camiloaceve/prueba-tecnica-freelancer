/*
  Warnings:

  - You are about to drop the `Buy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Buy" DROP CONSTRAINT "Buy_bookId_fkey";

-- DropTable
DROP TABLE "Buy";

-- CreateTable
CREATE TABLE "Sale" (
    "id" TEXT NOT NULL,
    "dealer" TEXT NOT NULL,
    "bookId" TEXT,
    "amount" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;
