import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnimalsService {
  constructor(private prisma: PrismaService) {}

  async getAnimals() {
    return this.prisma.animal.findMany({
      orderBy: {
        id: 'asc', // Keep order by ID (smallest first)
      },
    });
  }

  async feedAnimal(id: number) {
    return this.prisma.animal.update({
      where: { id },
      data: { thanks: { increment: 1 } },
    });
  }
}
