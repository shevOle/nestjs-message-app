import { IsString, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateMessageDTO {
    @IsString()
    @IsNotEmpty()
    message!: string;

    @IsDateString()
    @IsOptional()
    date?: string;
}