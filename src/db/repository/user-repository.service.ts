import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ConnectorDbService } from 'src/db/connector/connector-db.service';

@Injectable()
export class UserRepositoryService {
    constructor(private readonly db: ConnectorDbService) { }

    async create(data: Prisma.UserCreateInput) {
        return this.db.user.create({ data });
    }
}
