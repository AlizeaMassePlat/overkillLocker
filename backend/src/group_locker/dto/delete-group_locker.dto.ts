import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupLockerDto } from './create-group_locker.dto';
import { IsBoolean, IsInt, IsLatLong, IsNumber, IsString } from 'class-validator';
import { Point } from 'typeorm';

export class UpdateGroupLockerDto extends PartialType(CreateGroupLockerDto) {
    @IsNumber()
    id:number;
}