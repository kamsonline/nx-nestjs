import { TerminusModule } from '@nestjs/terminus';
import { Test } from '@nestjs/testing';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [TerminusModule],
      providers: [],
      controllers: [HealthController],
    }).compile();

    controller = module.get(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
