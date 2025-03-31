import { Module } from '@nestjs/common';
import { UserService } from 'src/domain/user/user.service';
import { UserController } from 'src/domain/user/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
