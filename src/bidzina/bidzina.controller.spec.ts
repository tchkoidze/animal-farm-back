import { Test, TestingModule } from '@nestjs/testing';
import { BidzinaController } from './bidzina.controller';

describe('BidzinaController', () => {
  let controller: BidzinaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BidzinaController],
    }).compile();

    controller = module.get<BidzinaController>(BidzinaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
