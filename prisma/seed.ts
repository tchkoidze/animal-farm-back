import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Reset the animals table and restart ID sequence
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "Animal" RESTART IDENTITY CASCADE;`,
  );

  await prisma.animal.createMany({
    data: [
      { name: 'Boxer', type: 'Horse', url: 'horse.jpg' },
      { name: 'Clover', type: 'Cock', url: 'cock.jpg' },
      { name: 'Donald', type: 'Duck', url: 'duck.jpg' },
      { name: 'Benjamin', type: 'Donkey', url: 'donkey.jpg' },
      { name: 'Muriel', type: 'Goat', url: 'goat.jpg' },
      { name: 'Pagy', type: 'Goose', url: 'goose.jpg' },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
