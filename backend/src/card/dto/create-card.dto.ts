import { IsString, IsEmail, IsNumber, Length, IsOptional, IsBoolean, IsDate, IsDefined, IsInt  } from 'class-validator';
export class CreateCardDto {

    @IsString()
    card_identifier: string;

    @IsNumber()
    state: number;

    @IsBoolean()
    is_deleted: boolean;
}
