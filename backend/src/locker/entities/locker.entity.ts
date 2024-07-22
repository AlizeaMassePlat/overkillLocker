import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
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
}

// Finir le fichier locker.entity.ts et le dto puis le module pour l'export en bdd
