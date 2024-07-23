import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
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

@Column()
id_group_locker:number;

@OneToMany(() => Log, log => log.id_locker)
@JoinColumn({ name: 'id_locker' })  // Explicitly specify the column name
logs: Log[];

}

// Finir le fichier locker.entity.ts et le dto puis le module pour l'export en bdd
