import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LogService {

  constructor(
    @InjectRepository(Log)
    private logRepository: Repository<Log>,
  ) {}

  async create(createLogDto: CreateLogDto) {
    return this.logRepository.insert(createLogDto);
  }

  async findAll() {
    return this.logRepository.find();
  }

  async findLogsByLocker(id_locker:number) {
    return this.logRepository.createQueryBuilder('log')
      .select('log.id')
      .addSelect('log.title')
      .addSelect('log.body')
      .addSelect('log.state')
      .addSelect('log.create_date')
      .innerJoin('locker', 'lock', 'lock.id=log.id_locker')
      .where('lock.id=:id_locker', {id_locker})
      .addSelect('lock.id')
      .addSelect('lock.position', 'locker_position')
      .addSelect('lock.state', 'locker_state')
      .addSelect('lock.is_open', 'locker_isopen')
      .getRawMany();
  }

  async findLogsByGroupLocker(id_group_locker:number) {
    return this.logRepository.createQueryBuilder('log')
      .select('log.id')
      .addSelect('log.title')
      .addSelect('log.body')
      .addSelect('log.state')
      .addSelect('log.create_date')
      .innerJoin('locker', 'lock', 'lock.id=log.id_locker')
      .addSelect('lock.position', 'locker_position')
      .addSelect('lock.state', 'locker_state')
      .addSelect('lock.is_open', 'locker_isopen')
      .innerJoin('group_locker', 'grp_lock', 'grp_lock.id=lock.id_group_locker')
      .where('grp_lock.id=:id_group_locker', {id_group_locker})
      .addSelect('grp_lock.id')
      .getRawMany();
  }


  async findOne(id: number):Promise<Log> {
    return this.logRepository.findOneBy({id});
  }

  async updateLogById(id: number, updateLogDto: UpdateLogDto) {
    return this.logRepository.update(id, updateLogDto);
  }

  async deleteLogById(id: number) {
    return this.logRepository.delete(id);
  }
}
