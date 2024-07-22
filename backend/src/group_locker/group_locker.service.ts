import { Injectable } from '@nestjs/common';
import { CreateGroupLockerDto } from './dto/create-group_locker.dto';
import { UpdateGroupLockerDto } from './dto/update-group_locker.dto';

@Injectable()
export class GroupLockerService {
  create(createGroupLockerDto: CreateGroupLockerDto) {
    return 'This action adds a new groupLocker';
  }

  findAll() {
    return `This action returns all groupLocker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupLocker`;
  }

  update(id: number, updateGroupLockerDto: UpdateGroupLockerDto) {
    return `This action updates a #${id} groupLocker`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupLocker`;
  }
}
