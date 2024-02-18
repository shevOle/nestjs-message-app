import { IsString, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateMessageDTO {
    @IsString()
    @IsNotEmpty()
    content!: string;

    @IsDateString()
    @IsOptional()
    date?: string;
}