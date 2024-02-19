import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDTO } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    constructor(private messageService: MessagesService) {}

    @Get()
    listMessages() {
        return this.messageService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDTO) {
        const data = { ...body };

        if (!data.date) {
            data.date = (new Date()).toISOString();
        }

        return this.messageService.create(data);
    }

    @Get('/:id')
    getMessageById(@Param('id') id: string) {
        return this.messageService.findOne(id);
    }
}
