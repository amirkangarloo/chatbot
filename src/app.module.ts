import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from 'src/domain/domain.module';
import { RepositoryModule } from 'src/db/repository.module';

@Module({
  imports: [
    DomainModule,
    RepositoryModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
