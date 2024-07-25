import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupLockerDto } from './dto/create-group_locker.dto';
import { UpdateGroupLockerDto } from './dto/update-group_locker.dto';
import { GroupLocker } from './entities/group_locker.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locker } from 'src/locker/entities/locker.entity';

@Injectable()
export class GroupLockerService {

  constructor(
    @InjectRepository(GroupLocker)
    private groupLockerRepository: Repository<GroupLocker>,
    @InjectRepository(Locker)
    private lockerRepository: Repository<Locker>,
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

  async update(id: number, updateGroupLockerDto: UpdateGroupLockerDto): Promise<GroupLocker> {
    const groupLocker = await this.groupLockerRepository.findOne({
      where: { id },
      relations: ['lockers'],
    });
  
    if (!groupLocker) {
      throw new NotFoundException('GroupLocker not found');
    }
  
    // Update group locker fields
    groupLocker.name_place = updateGroupLockerDto.name_place;
    groupLocker.locker_type = updateGroupLockerDto.locker_type;
    groupLocker.coordinate = updateGroupLockerDto.coordinate;
    groupLocker.locker_count = updateGroupLockerDto.locker_count;
  
    return this.groupLockerRepository.save(groupLocker);
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
