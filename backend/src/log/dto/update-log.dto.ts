import { PartialType } from '@nestjs/mapped-types';
import { CreateLogDto } from './create-log.dto';
import { IsInt, IsNumber } from 'class-validator';

export class UpdateLogDto extends PartialType(CreateLogDto) {
    @IsNumber()
    id:number
}
