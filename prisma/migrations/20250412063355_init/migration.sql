/*
  Warnings:

  - Added the required column `brand` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isFeatured` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numOfReviews` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "banner" TEXT,
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL,
ADD COLUMN     "numOfReviews" INTEGER NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL;
