import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 })
  firstname: string;

  @Column({ length: 255 })
  lastname: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  adress: string;

  @Column({
    type: 'enum',
    enum: ['intern', 'admin', 'extern'],
  })
  role: string;

  @Column({ length: 255 })
  school_prom: string;

  @Column()
  card_number: number; 

}
