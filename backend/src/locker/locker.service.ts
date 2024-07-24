import { Injectable, BadRequestException,  } from '@nestjs/common';
import { CreateLockerDto } from './dto/create-locker.dto';
import { UpdateLockerDto } from './dto/update-locker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locker } from './entities/locker.entity';

@Injectable()
export class LockerService {


  constructor(
    @InjectRepository(Locker)
    private LockerRepository: Repository<Locker>,
  ) {}


  async create(createLockerDto: CreateLockerDto) {
    // Mise en place d'un querybuilder pour vérifier si le group locker existe
    const result = await this.LockerRepository.createQueryBuilder('locker')
    .innerJoin('group_locker', 'grp_locker', 'grp_locker.id = locker.id_group_locker')
    .where('grp_locker.id=:id', { id: createLockerDto.id_group_locker })
    .getExists();
    if(result){
      return this.LockerRepository.insert(createLockerDto);
    }
    else{
      throw new BadRequestException('Group locker not found');
    }
  }


  async findAll() {
    return await this.LockerRepository.find();
  }

  async findOne(id: number):Promise<Locker> {
    return await this.LockerRepository.findOneBy({id});
  }

  async updateLocker(id: number, updateLockerDto: UpdateLockerDto) {
    try {
      // Vérifier l'existence du locker avant la mise à jour
      const lock = await this.LockerRepository.findOneBy({ id });
  
      if (!lock) {
        throw new BadRequestException('Locker not found');
      }
  
      // Mettre à jour le locker
      await this.LockerRepository.update(id, updateLockerDto);
      
      const message = `Locker with ID ${id} successfully updated`;
      return { message };
    } catch (error) {
      throw new BadRequestException(`${error.message}`);
    }
  }
  

  async delete(id: number) {
    return await this.LockerRepository.delete(id);
  }


  
}

