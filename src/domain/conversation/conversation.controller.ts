import { Controller, Get, Post } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller({ path: 'conversation', version: '1' })
@ApiBearerAuth()
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) { }
}
