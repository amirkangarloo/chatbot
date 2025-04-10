import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginRequestDto, LoginResponseDto, RegisterRequestDto } from 'src/domain/user/dto';
import { Public } from 'src/decorator';
import { ApiResponse } from '@nestjs/swagger';

@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Public()
  @ApiResponse({ type: LoginResponseDto })
  @Post("login")
  async login(@Body() body: LoginRequestDto): Promise<LoginResponseDto> {
    return this.userService.login(body);
  }

  @Public()
  @Post("register")
  async register(@Body() body: RegisterRequestDto) {
    return this.userService.register(body);
  }
}
