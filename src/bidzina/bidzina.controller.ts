import { Body, Controller, Get, Post } from '@nestjs/common';
import { BidzinaService } from './bidzina.service';

@Controller('api/bidzina')
export class BidzinaController {
  constructor(private readonly bidzinaService: BidzinaService) {}

  // GET /api/bidzina/status - Get the status of Bidzina
  @Get('status')
  async getStatus() {
    return await this.bidzinaService.getStatus();
  }

  @Post('status/toggle')
  async updateStatus() {
    //async updateStatus(@Body('status') newStatus: string) {
    return this.bidzinaService.updateStatus();
  }
}
