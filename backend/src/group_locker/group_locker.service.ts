import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupLockerDto } from './dto/create-group_locker.dto';
import { UpdateGroupLockerDto } from './dto/update-group_locker.dto';
import { GroupLocker } from './entities/group_locker.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locker } from 'src/locker/entities/locker.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';

@Injectable()
export class GroupLockerService {

  constructor(
    @InjectRepository(GroupLocker)
    private groupLockerRepository: Repository<GroupLocker>,
    @InjectRepository(Locker)
    private lockerRepository: Repository<Locker>,
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  create(createGroupLockerDto: CreateGroupLockerDto) {
    return this.groupLockerRepository.save(createGroupLockerDto);
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

  async findAllFree(): Promise<GroupLocker[]> {
    // 1. Récupérer les IDs des casiers réservés avec état 3 (Réparation)
    const reservedLockers = await this.reservationRepository
      .createQueryBuilder('reservation')
      .select('reservation.id_locker') // Assurez-vous que 'id_locker' est correct
      .getRawMany();

    // Debug: Afficher les IDs des casiers réservés
    console.log('Reserved Lockers:', reservedLockers);

    // Extraire les IDs des casiers réservés
    const reservedLockerIds = reservedLockers.map(row => row['id_locker']); // Assurez-vous du nom exact de la colonne

    // Debug: Afficher les IDs des casiers réservés après extraction
    console.log('Extracted Reserved Locker IDs:', reservedLockerIds);

    // 2. Trouver les groupes de casiers dont les casiers ne sont pas dans les IDs réservés
    const availableGroupLockers = await this.groupLockerRepository
      .createQueryBuilder('groupLocker')
      .leftJoinAndSelect('groupLocker.lockers', 'locker')
      .where(
        'locker.id IS NULL OR locker.id NOT IN (:...reservedLockerIds)',
        { reservedLockerIds },
      )
      .andWhere('groupLocker.is_delete = false') // Optionnel: Filtrer les groupes de casiers supprimés
      .getMany();

    // Debug: Afficher les groupes de casiers disponibles
    console.log('Available Group Lockers:', availableGroupLockers);

    return availableGroupLockers;
  }
}
