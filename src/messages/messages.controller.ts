import { Controller, Get, Post, Req, Res } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        return 'here will be all the messages'
    }

    @Post()
    createMessage(@Req() req, @Res() res) {
        const { body } = req;
        return res.send(`you want to create a message with this data: ${JSON.stringify(body)}`)
    }

    @Get('/:id')
    getMessageById(@Req() req, @Res() res) {
        const { id } = req.params;
        return res.send(`you want to get message with id: ${id}`)
    }
}
