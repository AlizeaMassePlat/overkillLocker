import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupLockerDto } from './create-group_locker.dto';
import { IsNumber } from 'class-validator';

export class UpdateGroupLockerDto extends PartialType(CreateGroupLockerDto) {
    @IsNumber()
    id:number;
}