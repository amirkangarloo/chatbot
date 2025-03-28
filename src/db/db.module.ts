import { Global, Module } from '@nestjs/common';
import { RepositoryModule } from 'src/db/repository/repository.module';

@Global()
@Module({
    imports: [RepositoryModule],
})
export class DbModule { }
