import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Locker } from 'src/locker/entities/locker.entity';

@Injectable()
export class ReservationService {

  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Locker)
    private lockerRepository: Repository<Locker>,
  ) {}

  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    // Trouver les entités User et Locker
    const user = await this.userRepository.findOne({
      where: { id: createReservationDto.id_user },
    });
    const locker = await this.lockerRepository.findOne({
      where: { id: createReservationDto.id_locker },
    });

    if (!user || !locker) {
      throw new Error('User or Locker not found');
    }

    // Créer la réservation
    const reservation = this.reservationRepository.create({
      ...createReservationDto,
      user,
      locker,
    });

    return this.reservationRepository.save(reservation);
  }

  findAll() {
    return this.reservationRepository.find({
      relations: {
        user: true,
        locker: true
      }
    });
  }

  count():Promise<number> {
    return this.reservationRepository.count();
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
