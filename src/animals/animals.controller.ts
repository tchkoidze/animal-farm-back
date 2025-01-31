import { Controller, Get, Post, Param } from '@nestjs/common';
import { AnimalsService } from './animals.service';

@Controller('api/animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Get()
  getAllAnimals() {
    return this.animalsService.getAnimals();
  }

  // @Get(':id')
  // getAnimal(@Param('id') id: string) {
  //   return this.animalsService.feedAnimal(id);
  // }

  @Post(':id/feed')
  feedAnimal(@Param('id') id: string) {
    return this.animalsService.feedAnimal(+id);
  }
}
