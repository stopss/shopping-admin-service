import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CouponsEntity } from '../entities/coupon.entity';
import { CouponInputDto } from './dto/Coupon.input.dto';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(CouponsEntity)
    private readonly couponRepository: Repository<CouponsEntity>,
  ) {}

  async createCoupon(couponInpuDto: CouponInputDto): Promise<any> {
    await this.couponRepository.save(couponInpuDto);

    return Object.assign({
      success: true,
      statusCode: 201,
      data: couponInpuDto,
      messsage: '신규 쿠폰이 발급되었습니다.',
      timestamp: new Date().toISOString(),
    });
  }
}
