import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Reset the animals table and restart ID sequence
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "Animal" RESTART IDENTITY CASCADE;`,
  );
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "PigStatus" RESTART IDENTITY CASCADE;`,
  );

  await prisma.animal.createMany({
    data: [
      { name: 'Boxer', type: 'Mammal', url: 'horse.jpg' },
      { name: 'Clover', type: 'Bird', url: 'cock.jpg' },
      { name: 'Donald', type: 'Bird', url: 'duck.jpg' },
      { name: 'Benjamin', type: 'Mammal', url: 'donkey.jpg' },
      { name: 'Muriel', type: 'Mammal', url: 'goat.jpg' },
      { name: 'Pagy', type: 'Bird', url: 'goose.jpg' },
    ],
  });

  await prisma.pigStatus.create({
    data: {
      status: 'default',
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
