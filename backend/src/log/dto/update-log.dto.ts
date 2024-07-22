import { PartialType } from '@nestjs/mapped-types';
import { CreateLogDto } from './create-log.dto';
import { IsInt } from 'class-validator';

export class UpdateLogDto extends PartialType(CreateLogDto) {
    @IsInt()
    id:number
}
