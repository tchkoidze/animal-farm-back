import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BidzinaService {
  // Method to get Bidzina's status
  constructor(private prisma: PrismaService) {}
  async getStatus() {
    // This could be a static response or fetched from a database
    return this.prisma.pigStatus.findFirst();
  }

  async updateStatus() {
    const existing = await this.prisma.pigStatus.findFirst();
    if (!existing) {
      throw new Error('No status found');
    }

    const newStatus = existing.status === 'default' ? 'putin' : 'default';

    return this.prisma.pigStatus.update({
      where: { id: existing.id },
      data: { status: newStatus },
    });
  }
}
