import { Injectable, NotFoundException } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
import { CreateMessageDTO } from './dtos/create-message.dto';

@Injectable()
export class MessagesService {
    constructor(private messagesRepository: MessagesRepository) {}

    async findOne(id: string) {
        const message = await this.messagesRepository.findOne(id);

        if (!message) throw new NotFoundException(`Message with id ${id} not found`);

        return message;
    }

    async findAll() {
        return this.messagesRepository.findAll();
    }

    async create(content: CreateMessageDTO) {
        return this.messagesRepository.create(content);
    }
}
