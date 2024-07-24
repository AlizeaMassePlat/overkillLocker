import { Injectable } from '@nestjs/common';
import { CreateGroupLockerDto } from './dto/create-group_locker.dto';
import { UpdateGroupLockerDto } from './dto/update-group_locker.dto';
import { GroupLocker } from './entities/group_locker.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GroupLockerService {

  constructor(
    @InjectRepository(GroupLocker)
    private groupLockerRepository: Repository<GroupLocker>,
  ) {}

  create(createGroupLockerDto: CreateGroupLockerDto) {
    return 'This action adds a new groupLocker';
  }

  findAll() {
    return this.groupLockerRepository.find() ;
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

  findAllRelations() {
    return this.groupLockerRepository.find({
      relations: {
        lockers: true
      }
    })
  }
}
