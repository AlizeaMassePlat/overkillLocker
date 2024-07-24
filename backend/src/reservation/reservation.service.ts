import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity';
import { User } from '../user/entities/user.entity';
import { Locker } from '../locker/entities/locker.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Locker)
    private readonly lockerRepository: Repository<Locker>,
  ) {}

  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const userId = createReservationDto.id_user;
    const lockerId = Number(createReservationDto.id_locker);

    // Find user and locker
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException(`User #${userId} not found`);
    }

    const locker = await this.lockerRepository.findOne({
      where: { id: lockerId },
    });
    if (!locker) {
      throw new NotFoundException(`Locker #${lockerId} not found`);
    }

    // Create a new reservation entity
    const newReservation = this.reservationRepository.create({
      state: createReservationDto.state,
      reserve_type: createReservationDto.reserve_type,
      is_delete: createReservationDto.is_delete ?? false,  
      id_locker: lockerId,
      id_user: userId,
      user,  
      locker, 
    });

    return this.reservationRepository.save(newReservation);
  }

  async findAll(): Promise<Reservation[]> {
    return this.reservationRepository.find({ relations: ['user', 'locker'] });
  }

  async findOne(id: number): Promise<Reservation> {
    const reservation = await this.reservationRepository.findOne({
      where: { id },
      relations: ['user', 'locker'],
    });
    if (!reservation) {
      throw new NotFoundException(`Reservation #${id} not found`);
    }
    return reservation;
  }

  async update(id: number, updateReservationDto: UpdateReservationDto): Promise<Reservation> {
    const reservation = await this.findOne(id);
    Object.assign(reservation, updateReservationDto);
    return this.reservationRepository.save(reservation);
  }

  async remove(id: number): Promise<void> {
    const result = await this.reservationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Reservation #${id} not found`);
    }
  }
}
