import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepositoryService } from 'src/db/repository';
import { RegisterRequestDto } from 'src/domain/user/dto';
import { hashPassword } from 'src/utility';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepositoryService) { }

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
}
