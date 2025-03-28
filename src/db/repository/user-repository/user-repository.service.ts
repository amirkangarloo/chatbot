import { Injectable } from '@nestjs/common';
import { ConnectorDbService } from 'src/db/connector/connector-db.service';

@Injectable()
export class UserRepositoryService {
    constructor(private readonly db: ConnectorDbService) { }
}
