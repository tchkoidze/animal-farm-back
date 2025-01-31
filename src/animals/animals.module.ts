import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnimalsController } from './animals.controller';

@Module({
  providers: [AnimalsService, PrismaService],
  controllers: [AnimalsController],
  exports: [AnimalsService],
})
export class AnimalsModule {}
