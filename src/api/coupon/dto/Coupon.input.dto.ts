import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'src/api/entities/coupon.entity';

export class CouponInputDto {
  @IsString()
  @IsNotEmpty()
  coupon_code: string;

  @IsString()
  @IsNotEmpty()
  coupon_name: string;

  @IsString()
  @IsNotEmpty()
  coupon_description: string;

  @IsEnum(Type)
  @IsNotEmpty()
  coupon_type: Type;

  @IsString()
  @IsNotEmpty()
  discount_rate: string;
}
