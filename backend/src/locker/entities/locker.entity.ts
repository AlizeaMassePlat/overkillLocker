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

    @Column()
    id_group_locker:number;

    @OneToMany(() => Log, log => log.id_locker)
    @JoinColumn({ name: 'id_locker' })  // Explicitly specify the column name
    logs: Log[];

}