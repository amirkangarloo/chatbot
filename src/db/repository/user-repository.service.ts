import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ConnectorDbService } from 'src/db/connector/connector-db.service';

@Injectable()
export class UserRepositoryService {
    constructor(private readonly db: ConnectorDbService) { }

    async create(data: Prisma.UserCreateInput) {
        await this.db.user.create({ data });

        return "success";
    }

    async findUniqueOne(where: Prisma.UserWhereUniqueInput) {
        return this.db.user.findUnique({ where });
    }
}
