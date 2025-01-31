import { Injectable } from '@nestjs/common';

@Injectable()
export class BidzinaService {
  // Method to get Bidzina's status
  async getStatus() {
    // This could be a static response or fetched from a database
    return {
      status: 'Bidzina is active and working!',
    };
  }
}
