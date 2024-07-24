import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  async create(createReservationDto: CreateReservationDto) {
    const reservation = this.reservationRepository.create(createReservationDto);
    return this.reservationRepository.save(reservation);
  }

  async findAll() {
    return this.reservationRepository.find({
      relations: ['user', 'locker'],
    });
  }

  async findOne(id: number) {
    return this.reservationRepository.findOne({
      where: { id },
      relations: ['user', 'locker'],
    });
  }

  async findAllByUserId(user_id: number) {
    return this.reservationRepository.find({
      where: { user: { id: user_id } as any }, // Cast to any to avoid type mismatch
      relations: ['user', 'locker'],
    });
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
    await this.reservationRepository.update(id, updateReservationDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const reservation = await this.findOne(id);
    return this.reservationRepository.remove(reservation);
  }
}
