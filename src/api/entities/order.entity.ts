import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum DeliveryStatus {
  PROCEEDING = 'proceeding',
  COMPLETION = 'completion',
}

export enum PaymentStatus {
  CANCEL_PAYMENT = 'cancel_payment',
  COMPLETE_PAYMENT = 'complete_payment',
  PROCEEDING_PAYMENT = 'proceeding_payment',
}

@Entity({ name: 'orders' })
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  total_price: number;

  @Column({
    type: 'enum',
    enum: DeliveryStatus,
    default: DeliveryStatus.PROCEEDING,
  })
  delivery_status: DeliveryStatus;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.PROCEEDING_PAYMENT,
  })
  payment_status: PaymentStatus;

  @Column({})
  order_date: Date;

  @Column()
  payment_date: Date;

  @Column()
  delivery_completed: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}


