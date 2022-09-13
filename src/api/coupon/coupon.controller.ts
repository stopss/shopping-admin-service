import { Body, Controller, Post } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CouponInputDto } from './dto/Coupon.input.dto';

@Controller('api/coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Post()
  create(@Body() couponInputDto: CouponInputDto): Promise<any> {
    return this.couponService.createCoupon(couponInputDto);
  }
}
