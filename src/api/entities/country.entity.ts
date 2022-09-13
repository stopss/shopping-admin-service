import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'countries' })
export class CountriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  country_code: string;

  @Column()
  country_dcode: number;

  @Column()
  country_name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
