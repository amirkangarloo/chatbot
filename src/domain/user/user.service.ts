import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from 'src/db/repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepositoryService) { }
}
