import { Module, Provider } from '@nestjs/common';
// Repositories
import * as repository from "./repository";
// Connector DB
import { ConnectorDbModule } from 'src/db/connector/connector-db.module';

const repositories: Provider[] = Object.values(repository);

@Module({
  imports: [ConnectorDbModule],
  providers: repositories,
  exports: repositories,
})
export class RepositoryModule { }
