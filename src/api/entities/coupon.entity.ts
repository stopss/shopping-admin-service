import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Type {
  DELIVERY_FEE = 'delivery_fee',
  SALE = 'sale',
  FLAT_DISCOUNT = 'flat_discount',
}

@Entity({ name: 'coupons' })
export class CouponsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  coupon_code: string;

  @Column()
  coupon_name: string;

  @Column()
  coupon_description: string;

  @Column({ type: 'enum', enum: Type, default: Type.SALE })
  coupon_type: Type;

  @Column()
  discount_rate: string;

  @Column()
  useCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}


