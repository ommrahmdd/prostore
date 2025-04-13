"use server";

import { PrismaClient } from "@prisma/client";

export async function getProducts(limit?: string) {
  const prisma = new PrismaClient();

  return await prisma.product.findMany({
    take: limit ? parseInt(limit) : undefined,
  });
}

export async function getProductDetails(slug: string) {
  const prisma = new PrismaClient();

  return await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  });
}
