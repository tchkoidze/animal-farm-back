import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AnimalsModule } from './animals/animals.module';
import { BidzinaController } from './bidzina/bidzina.controller';
import { BidzinaService } from './bidzina/bidzina.service';
import { BidzinaModule } from './bidzina/bidzina.module';

@Module({
  imports: [AnimalsModule, BidzinaModule],
  controllers: [AppController, BidzinaController],
  providers: [AppService, PrismaService, BidzinaService],
  exports: [PrismaService],
})
export class AppModule {}
