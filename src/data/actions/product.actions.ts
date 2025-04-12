"use server";

import { PrismaClient } from "@prisma/client";

export async function getProducts(limit?: string) {
  const prisma = new PrismaClient();

  return await prisma.product.findMany({
    take: limit ? parseInt(limit) : undefined,
  });
}
