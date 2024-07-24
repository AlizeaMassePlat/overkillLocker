import { Entity, Column, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { GroupLocker } from 'src/group_locker/entities/group_locker.entity';
@Entity()
export class Locker {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    is_open: boolean;
    
    @Column({ length: 255 })
    position: string;
    
    @Column({nullable:false})
    state: number;

    @Column({nullable:false})
    is_delete: boolean;


    @Column({nullable:false})
    id_group_locker: number;

    @OneToOne(() => GroupLocker, group_locker => group_locker.id)
    group_locker: number;

  
}

