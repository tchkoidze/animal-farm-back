import { Module } from '@nestjs/common';
import { BidzinaController } from './bidzina.controller';
import { BidzinaService } from './bidzina.service';

@Module({
  controllers: [BidzinaController],
  providers: [BidzinaService],
})
export class BidzinaModule {}
