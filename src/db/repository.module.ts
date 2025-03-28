import { Global, Module, Provider } from '@nestjs/common';
// Repositories
import * as repository from "./repository";
// Connector DB
import { ConnectorDbService } from 'src/db/connector/connector-db.service';

const repositories: Provider[] = Object.values(repository);

@Global()
@Module({
  providers: [ConnectorDbService, ...repositories],
  exports: repositories,
})
export class RepositoryModule { }
