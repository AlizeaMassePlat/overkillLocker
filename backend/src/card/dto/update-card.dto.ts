import { PartialType } from '@nestjs/mapped-types';
import { CreateCardDto } from './create-card.dto';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCardDto {
    @IsOptional()
    @IsString()
    card_identifier?: string;

    @IsOptional()
    @IsNumber()
    state?: number;

    @IsOptional()
    @IsBoolean()
    is_deleted?: boolean;
}
