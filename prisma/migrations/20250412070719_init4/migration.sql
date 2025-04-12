/*
  Warnings:

  - You are about to drop the column `numOfReviews` on the `Product` table. All the data in the column will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "numOfReviews",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "numReviews" INTEGER,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;
