import { IsString, IsEmail, IsNumber, Length, IsOptional, IsBoolean, IsDate, IsDefined  } from 'class-validator';
export class CreateCardDto {



    @IsDefined()
    @IsString()
    card_identifier: string;

    @IsDefined()
    @IsNumber()
    state: number;

    @IsDefined()
    @IsBoolean()
    is_deleted: boolean;
}
