import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ItemInputDto {
  @IsString()
  @IsNotEmpty()
  item_code: string;

  @IsString()
  @IsNotEmpty()
  item_name: string;

  @IsNumber()
  @IsNotEmpty()
  item_price: number;
}
