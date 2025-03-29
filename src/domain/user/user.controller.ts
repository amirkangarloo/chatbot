import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterRequestDto } from 'src/domain/user/dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async login() {
  }

  @Post()
  async register(@Body() body: RegisterRequestDto) {
    return this.userService.register(body);
  }
}
