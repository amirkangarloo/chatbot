import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller({ path: 'conversation', version: '1' })
@ApiBearerAuth()
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) { }

  @Get()
  async findAll() { }

  @Get(':conversationId')
  async findOne() { }

  @Post()
  async create() { }

  @Post(':conversationId/message')
  async sendMessage() { }

  @Patch(':conversationId')
  async update() { }

  @Delete(':conversationId')
  async remove() { }
}
