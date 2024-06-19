import { Test, TestingModule } from '@nestjs/testing';
import { GetAllIcecreamsService } from './get-all-icecreams.service';

describe('GetAllIcecreamsService', () => {
  let service: GetAllIcecreamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllIcecreamsService],
    }).compile();

    service = module.get<GetAllIcecreamsService>(GetAllIcecreamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
