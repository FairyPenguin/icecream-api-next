import { Test, TestingModule } from '@nestjs/testing';
import { IcecreamController } from './icecream.controller';

describe('IcecreamController', () => {
  let controller: IcecreamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IcecreamController],
    }).compile();

    controller = module.get<IcecreamController>(IcecreamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
