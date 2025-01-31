import { Test, TestingModule } from '@nestjs/testing';
import { BidzinaService } from './bidzina.service';

describe('BidzinaService', () => {
  let service: BidzinaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BidzinaService],
    }).compile();

    service = module.get<BidzinaService>(BidzinaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
