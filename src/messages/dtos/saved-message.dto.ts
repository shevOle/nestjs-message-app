import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class SavedMessageDTO {
    @IsString()
    @IsNotEmpty()
    message!: string;

    @IsDateString()
    @IsNotEmpty()
    date!: string;
}