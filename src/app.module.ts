import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from 'src/db/db.module';
import { DomainModule } from 'src/domain/domain.module';

@Module({
  imports: [
    DbModule,
    DomainModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
