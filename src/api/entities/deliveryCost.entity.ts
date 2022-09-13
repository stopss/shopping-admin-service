import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'delivery_cost' })
export class DeliveryCostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  Australia: number;

  @Column()
  Brazil: number;

  @Column()
  Canada: number;

  @Column()
  China: number;

  @Column()
  France: number;

  @Column()
  Germany: number;

  @Column()
  Hong_kong: number;

  @Column()
  Indonesia: number;

  @Column()
  Japan: number;

  @Column()
  Malaysia: number;

  @Column()
  New_Zealand: number;

  @Column()
  Philippines: number;

  @Column()
  Russia: number;

  @Column()
  Singapore: number;

  @Column()
  Spain: number;

  @Column()
  Taiwan: number;

  @Column()
  Thailand: number;

  @Column()
  UK: number;

  @Column()
  USA: number;

  @Column()
  Vietnam: number;

  @Column()
  Cambodia: number;

  @Column()
  Laos: number;

  @Column()
  Macao: number;

  @Column()
  Mongolia: number;

  @Column()
  Myanmar: number;

  @Column()
  Bangladesh: number;

  @Column()
  Bhutan: number;

  @Column()
  Brunei_Darussala: number;

  @Column()
  India: number;

  @Column()
  Maldives: number;

  @Column()
  Nepal: number;

  @Column()
  Sri_Lanka: number;

  @Column()
  Albania: number;

  @Column()
  Armenia: number;

  @Column()
  Austria: number;

  @Column()
  Azerbaijan: number;

  @Column()
  Bahrain: number;

  @Column()
  Belarus: number;

  @Column()
  Belgium: number;

  @Column()
  Bulgaria: number;

  @Column()
  Bosnia_And_Herzegovina: number;

  @Column()
  Croatia: number;

  @Column()
  Cyprus: number;

  @Column()
  Czech_Rep: number;

  @Column()
  Denmark: number;

  @Column()
  Estonia: number;

  @Column()
  Finland: number;

  @Column()
  Georgia: number;

  @Column()
  Greece: number;

  @Column()
  Hungary: number;

  @Column()
  Iran: number;

  @Column()
  Ireland: number;

  @Column()
  Israel: number;

  @Column()
  Jordan: number;

  @Column()
  Kazakhstan: number;

  @Column()
  Latvia: number;

  @Column()
  Luxembourg: number;

  @Column()
  Macedonia: number;

  @Column()
  Netherlands: number;

  @Column()
  Norway: number;

  @Column()
  Oman: number;

  @Column()
  Pakistan: number;

  @Column()
  Poland: number;

  @Column()
  Portugal: number;

  @Column()
  Qatar: number;

  @Column()
  Saudi_Arabia: number;

  @Column()
  Slovakia: number;

  @Column()
  Slovenia: number;

  @Column()
  Sweden: number;

  @Column()
  Switzerland: number;

  @Column()
  Turkey: number;

  @Column()
  Ukraine: number;

  @Column()
  United_Arab_Emirates: number;

  @Column()
  Uzbekistan: number;

  @Column()
  Algeria: number;

  @Column()
  Antiless_Netherlands: number;

  @Column()
  Argentina: number;

  @Column()
  Botswana: number;

  @Column()
  Cape_Verde: number;

  @Column()
  Chile: number;

  @Column()
  Costa_Rica: number;

  @Column()
  Cuba: number;

  @Column()
  Djibouti: number;

  @Column()
  Dominican_Republic: number;

  @Column()
  Ecuador: number;

  @Column()
  Egypt: number;

  @Column()
  Eritrea: number;

  @Column()
  Ethiopia: number;

  @Column()
  Fiji: number;

  @Column()
  Kenya: number;

  @Column()
  Lesotho: number;

  @Column()
  Mauritius: number;

  @Column()
  Mexico: number;

  @Column()
  Morocco: number;

  @Column()
  Mozambique: number;

  @Column()
  Nigeria: number;

  @Column()
  Panama: number;

  @Column()
  Peru: number;

  @Column()
  Rwanda: number;

  @Column()
  Tanzania: number;

  @Column()
  Tunisia: number;

  @Column()
  Zambia: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
