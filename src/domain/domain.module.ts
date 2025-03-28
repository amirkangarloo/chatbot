import { Module } from '@nestjs/common';
// Domain modules
import { UserModule } from 'src/domain/user/user.module';
import { ConversationModule } from 'src/domain/conversation/conversation.module';

@Module({
    imports: [UserModule, ConversationModule],
})
export class DomainModule { }
