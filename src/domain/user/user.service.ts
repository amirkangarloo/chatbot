import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/constant';
import { UserRepositoryService } from 'src/db/repository';
import { LoginRequestDto, LoginResponseDto, RegisterRequestDto } from 'src/domain/user/dto';
import { comparePassword, hashPassword } from 'src/utility';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepositoryService, private readonly jwtService: JwtService
    ) { }

    async login(payload: LoginRequestDto): Promise<LoginResponseDto> {
        const { username, password } = payload;

        const user = await this.userRepository.findUniqueOne({ username });
        if (!user) {
            throw new UnauthorizedException("Username or password is incorrect");
        }

        const isPasswordCorrect = await comparePassword(password, user.password);
        if (!isPasswordCorrect) {
            throw new UnauthorizedException("Username or password is incorrect");
        }

        return this.jwtAccessTokenGenerate({ sub: user.id, username: user.username });
    }

    async register(body: RegisterRequestDto) {
        const { password: plainPassword, username } = body;
        await this.checkUsernameIsUnique(username);
        const password = await hashPassword(plainPassword);

        return this.userRepository.create({ username, password });
    }

    private async checkUsernameIsUnique(username: string): Promise<void> {
        const exist = await this.userRepository.findUniqueOne({ username });
        if (exist) {
            throw new ConflictException("Username already exists, please try another one");
        }
    }

    private async jwtAccessTokenGenerate(payload: { sub: string, username: string }): Promise<LoginResponseDto> {
        return { access_token: await this.jwtService.signAsync(payload) };
    }
}
