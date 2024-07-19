import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 , nullable:true})
  firstname: string;

  @Column({ length: 255, nullable:true })
  lastname: string;

  @Column({ unique: true, nullable:false })
  email: string;

  @Column({ length: 255, nullable:true })
  adress: string;

  @Column({ length: 255 })
  role: string;

  @Column({ length: 255 })
  school_prom: string;

  @Column()
  card_number: number;

  @Column()
  is_deleted: boolean;

  @Column()
  create_date: Date;


}


