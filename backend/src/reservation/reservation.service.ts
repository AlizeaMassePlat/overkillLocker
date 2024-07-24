import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ReservationService {

  constructor(
    @InjectRepository(Reservation )
    private reservationRepository: Repository<Reservation>,
    
  ) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservationRepository.save(createReservationDto);
  }

  findAll() {
    return this.reservationRepository.find({
      relations: {
        user: true,
        locker: true
      }
    });
  }

  async findOne(id: number): Promise<Reservation> {
    try {
      const reservation = await this.reservationRepository.findOne({
        where: { id },
        relations: ['user', 'locker'],
      });
      if (!reservation) {
        throw new NotFoundException(`Reservation with ID ${id} not found`);
      }
      return reservation;
    } catch (error) {
      throw new InternalServerErrorException('An error occurred while retrieving the reservation');
    }
  }  

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return this.reservationRepository.update(id, updateReservationDto);
    
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
