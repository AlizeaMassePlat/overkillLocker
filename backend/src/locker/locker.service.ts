import { Injectable } from '@nestjs/common';
import { CreateLockerDto } from './dto/create-locker.dto';
import { UpdateLockerDto } from './dto/update-locker.dto';

@Injectable()
export class LockerService {
  create(createLockerDto: CreateLockerDto) {
    return 'This action adds a new locker';
  }

  findAll() {
    return `This action returns all locker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locker`;
  }

  update(id: number, updateLockerDto: UpdateLockerDto) {
    return `This action updates a #${id} locker`;
  }

  remove(id: number) {
    return `This action removes a #${id} locker`;
  }
}
