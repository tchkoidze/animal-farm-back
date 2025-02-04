import { Module } from '@nestjs/common';
import { BidzinaController } from './bidzina.controller';
import { BidzinaService } from './bidzina.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BidzinaController],
  providers: [BidzinaService, PrismaService],
  exports: [BidzinaService],
})
export class BidzinaModule {}
