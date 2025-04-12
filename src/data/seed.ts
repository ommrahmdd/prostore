import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  await prisma.product.deleteMany();

  await Promise.all(
    sampleData.products.map((prd) => {
      return prisma.product.create({ data: prd });
    })
  ).then(() => {
    return console.info("[SEED] Successfully created product records");
  });
}

main();
