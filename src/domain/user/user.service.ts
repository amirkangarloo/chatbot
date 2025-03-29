import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from 'src/db/repository';
import { RegisterRequestDto } from 'src/domain/user/dto';
import { hashPassword } from 'src/utility';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepositoryService) { }

    async register(body: RegisterRequestDto) {
        const { password: plainPassword, ...rest } = body;
        const password = await hashPassword(plainPassword);

        return this.userRepository.create({ ...rest, password });
    }
}
