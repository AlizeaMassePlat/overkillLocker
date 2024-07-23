import { IsString, IsEmail, IsNumber, Length, IsOptional, IsBoolean, IsDate, IsDefined, IsInt  } from 'class-validator';
export class CreateCardDto {
    @IsDefined()
    @IsString()
    card_identifier: string;

    @IsDefined()
    @IsNumber()
    state: number;

    @IsDefined()
    @IsBoolean()
    is_delete: boolean;
}
