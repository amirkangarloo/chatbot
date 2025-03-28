import { Test, TestingModule } from '@nestjs/testing';
import { ConnectorDbService } from './connector-db.service';

describe('ConnectorDbService', () => {
  let service: ConnectorDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectorDbService],
    }).compile();

    service = module.get<ConnectorDbService>(ConnectorDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
