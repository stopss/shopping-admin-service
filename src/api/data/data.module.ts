import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesEntity } from '../entities/country.entity';
import { DeliveryCostEntity } from '../entities/deliveryCost.entity';
import { ItmesEntity } from '../entities/item.entity';
import { DataController } from './data.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CountriesEntity,
      DeliveryCostEntity,
      ItmesEntity,
    ]),
  ],
  controllers: [DataController],
  providers: [DataController],
})
export class DataModule {}
