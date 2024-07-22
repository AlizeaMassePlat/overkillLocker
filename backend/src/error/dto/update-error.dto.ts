import { IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateErrorDto } from './create-error.dto';

export class UpdateErrorDto extends PartialType(CreateErrorDto) {
    @IsNumber()
    id:number
}
