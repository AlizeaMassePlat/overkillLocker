import { IsBoolean, IsLatLong, IsNumber } from "class-validator";

export class CreateLockerDto {

    @IsBoolean()
    is_open: boolean;

    @IsLatLong()
    position: string = null;

    @IsNumber()
    state: number;

    @IsBoolean()
    is_delete: boolean;

}
