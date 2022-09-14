import {
  Body,
  Controller,
  Injectable,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as XLSX from 'xlsx';
import { InjectRepository } from '@nestjs/typeorm';
import { CountriesEntity } from '../entities/country.entity';
import { Repository } from 'typeorm';
import { DeliveryCostEntity } from '../entities/deliveryCost.entity';
import { ItemInputDto } from './dto/item.input.dto';
import { ItmesEntity } from '../entities/item.entity';

@Controller('api/data')
@Injectable()
export class DataController {
  constructor(
    @InjectRepository(CountriesEntity)
    private readonly countryRepository: Repository<CountriesEntity>,
    @InjectRepository(DeliveryCostEntity)
    private readonly deliveryCostRepository: Repository<DeliveryCostEntity>,
    @InjectRepository(ItmesEntity)
    private readonly itmesRepository: Repository<ItmesEntity>,
  ) {}

  @Post('test')
  async test(@Body() body: string) {
    console.log(body);
  }

  @Post('country')
  @UseInterceptors(FileInterceptor('file'))
  async handleCountry(@UploadedFile() file) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });

    const sheetName = workbook.SheetNames[0];

    console.log(sheetName);
    const sheet = workbook.Sheets[sheetName];

    const rows = XLSX.utils.sheet_to_json(sheet, {
      // cell에 값이 비어져있으면 ''을 기본값으로 설정
      defval: null,
    });

    for (const row in rows) {
      const data = {
        country_code: rows[row]['country_code'],
        country_dcode: rows[row]['country_dcode'],
        country_name: rows[row]['country_name'],
      };

      await this.countryRepository.save(data);
    }
  }

  @Post('delivery_cost')
  @UseInterceptors(FileInterceptor('file'))
  async handleDeliveryCost(@UploadedFile() file) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });

    const sheetName = workbook.SheetNames[0];

    console.log(sheetName);
    const sheet = workbook.Sheets[sheetName];

    const rows = XLSX.utils.sheet_to_json(sheet, {
      // cell에 값이 비어져있으면 ''을 기본값으로 설정
      defval: null,
    });

    for (const row in rows) {
      const data = {
        quantity: rows[row]['quantity'],

        Australia: rows[row]['Australia'],
        Brazil: rows[row]['Brazil'],
        Canada: rows[row]['Canada'],
        China: rows[row]['China'],
        France: rows[row]['France'],
        Germany: rows[row]['Germany'],
        Hong_kong: rows[row]['Hong_kong'],
        Indonesia: rows[row]['Indonesia'],
        Japan: rows[row]['Japan'],
        Malaysia: rows[row]['Malaysia'],

        New_Zealand: rows[row]['New_Zealand'],
        Philippines: rows[row]['Philippines'],
        Russia: rows[row]['Russia'],
        Singapore: rows[row]['Singapore'],
        Spain: rows[row]['Spain'],
        Taiwan: rows[row]['Taiwan'],
        Thailand: rows[row]['Thailand'],
        UK: rows[row]['UK'],
        USA: rows[row]['USA'],
        Vietnam: rows[row]['Vietnam'],

        Cambodia: rows[row]['Cambodia'],
        Laos: rows[row]['Laos'],
        Macao: rows[row]['Macao'],
        Mongolia: rows[row]['Mongolia'],
        Myanmar: rows[row]['Myanmar'],
        Bangladesh: rows[row]['Bangladesh'],
        Bhutan: rows[row]['Bhutan'],
        Brunei_Darussala: rows[row]['Brunei_Darussala'],
        India: rows[row]['India'],
        Maldives: rows[row]['Maldives'],

        Nepal: rows[row]['Nepal'],
        Sri_Lanka: rows[row]['Sri_Lanka'],
        Albania: rows[row]['Albania'],
        Armenia: rows[row]['Armenia'],
        Austria: rows[row]['Austria'],
        Azerbaijan: rows[row]['Azerbaijan'],
        Bahrain: rows[row]['Bahrain'],
        Belarus: rows[row]['Belarus'],
        Belgium: rows[row]['Belgium'],
        Bulgaria: rows[row]['Bulgaria'],

        Bosnia_And_Herzegovina: rows[row]['Bosnia_And_Herzegovina'],
        Croatia: rows[row]['Croatia'],
        Cyprus: rows[row]['Cyprus'],
        Czech_Rep: rows[row]['Czech_Rep'],
        Denmark: rows[row]['Denmark'],
        Estonia: rows[row]['Estonia'],
        Finland: rows[row]['Finland'],
        Georgia: rows[row]['Georgia'],
        Greece: rows[row]['Greece'],
        Hungary: rows[row]['Hungary'],

        Iran: rows[row]['Iran'],
        Ireland: rows[row]['Ireland'],
        Israel: rows[row]['Israel'],
        Jordan: rows[row]['Jordan'],
        Kazakhstan: rows[row]['Kazakhstan'],
        Latvia: rows[row]['Latvia'],
        Luxembourg: rows[row]['Luxembourg'],
        Macedonia: rows[row]['Macedonia'],
        Netherlands: rows[row]['Netherlands'],
        Norway: rows[row]['Norway'],

        Oman: rows[row]['Oman'],
        Pakistan: rows[row]['Pakistan'],
        Poland: rows[row]['Poland'],
        Portugal: rows[row]['Portugal'],
        Qatar: rows[row]['Qatar'],
        Romania: rows[row]['Romania'],
        Saudi_Arabia: rows[row]['Saudi_Arabia'],
        Slovakia: rows[row]['Slovakia'],
        Slovenia: rows[row]['Slovenia'],
        Sweden: rows[row]['Sweden'],

        Switzerland: rows[row]['Switzerland'],
        Turkey: rows[row]['Turkey'],
        Ukraine: rows[row]['Ukraine'],
        United_Arab_Emirates: rows[row]['United_Arab_Emirates'],
        Uzbekistan: rows[row]['Uzbekistan'],
        Algeria: rows[row]['Algeria'],
        Antiless_Netherlands: rows[row]['Antiless_Netherlands'],
        Argentina: rows[row]['Argentina'],
        Botswana: rows[row]['Botswana'],
        Cape_Verde: rows[row]['Cape_Verde'],

        Chile: rows[row]['Chile'],
        Costa_Rica: rows[row]['Costa_Rica'],
        Cuba: rows[row]['Cuba'],
        Djibouti: rows[row]['Djibouti'],
        Dominican_Republic: rows[row]['Dominican_Republic'],
        Ecuador: rows[row]['Ecuador'],
        Egypt: rows[row]['Egypt'],
        Eritrea: rows[row]['Eritrea'],
        Ethiopia: rows[row]['Ethiopia'],
        Fiji: rows[row]['Fiji'],

        Kenya: rows[row]['Kenya'],
        Lesotho: rows[row]['Lesotho'],
        Mauritius: rows[row]['Mauritius'],
        Mexico: rows[row]['Mexico'],
        Morocco: rows[row]['Morocco'],
        Mozambique: rows[row]['Mozambique'],
        Nigeria: rows[row]['Nigeria'],
        Panama: rows[row]['Panama'],
        Peru: rows[row]['Peru'],
        Rwanda: rows[row]['Rwanda'],

        Tanzania: rows[row]['Tanzania'],
        Tunisia: rows[row]['Tunisia'],
        Zambia: rows[row]['Zambia'],
      };

      await this.deliveryCostRepository.save(data);
    }
  }

  @Post('item')
  async handleItem(@Body() itemInpuDto: ItemInputDto) {
    await this.itmesRepository.save(itemInpuDto);
  }
}
