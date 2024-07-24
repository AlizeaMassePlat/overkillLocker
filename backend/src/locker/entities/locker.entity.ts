import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { GroupLocker } from 'src/group_locker/entities/group_locker.entity';
import { Log } from 'src/log/entities/log.entity';

@Entity()
export class Locker extends AbstractEntity<Locker> {

    @Column({nullable:false})
    state: number;

    @Column({ length: 255 })
    position: string;

    @Column({nullable:false})
    is_open: boolean;

    @Column({nullable:false})
    is_delete: boolean;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    create_date: Date;

    @ManyToOne(() => GroupLocker, (GroupLocker) => GroupLocker.lockers)
    groupLocker: GroupLocker

}