import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        return 'here will be all the messages'
    }

    @Post()
    createMessage(@Body() body: any,) {
        return `you want to create a message with this data (upd): ${JSON.stringify(body)}`
    }

    @Get('/:id')
    getMessageById(@Param('id') id: string) {
        return `you want to get message with id (upd): ${id}`
    }
}
