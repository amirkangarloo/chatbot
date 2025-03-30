import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterRequestDto } from 'src/domain/user/dto';
import { Public } from 'src/decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post("login")
  async login() {
  }

  @Public()
  @Post("register")
  async register(@Body() body: RegisterRequestDto) {
    return this.userService.register(body);
  }
}
