import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { randomUUID } from 'crypto';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { SavedMessageDTO } from './dtos/saved-message.dto';

@Injectable()
export class MessagesRepository {
    async findOne(id: string): Promise<SavedMessageDTO> {
        const fileData = await readFile('messages.json', 'utf-8');
        const records = JSON.parse(fileData);

        return records[id];
    }

    async findAll(): Promise<SavedMessageDTO[]> {
        const fileData = await readFile('messages.json', 'utf-8');
        return JSON.parse(fileData);
    }

    async create({ message, date }: CreateMessageDTO): Promise<void> {
        const fileData = await readFile('messages.json', 'utf-8');
        const records = JSON.parse(fileData);

        const id = randomUUID();
        records[id] = { message, date };
        await writeFile('messages.json', JSON.stringify(records));
    }
}