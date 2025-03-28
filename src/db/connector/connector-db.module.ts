import { Module } from '@nestjs/common';
import { ConnectorDbService } from './connector-db.service';

@Module({
  providers: [ConnectorDbService],
  exports: [ConnectorDbService],
})
export class ConnectorDbModule { }
