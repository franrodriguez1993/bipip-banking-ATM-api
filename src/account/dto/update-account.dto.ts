import { IsNumber, IsPositive, Min } from 'class-validator';

export class UpdateAccountDto {
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @Min(0)
  money: number;
}
