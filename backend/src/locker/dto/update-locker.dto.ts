import { PartialType } from '@nestjs/mapped-types';
import { CreateLockerDto } from './create-locker.dto';

export class UpdateLockerDto extends PartialType(CreateLockerDto) {}
