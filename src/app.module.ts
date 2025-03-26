import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { ConversationModule } from './domain/conversation/conversation.module';
import { RepositoryModule } from './repository/repository.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    ConversationModule,
    RepositoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
