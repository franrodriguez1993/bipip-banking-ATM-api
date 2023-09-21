import { IsPositive, IsString, Length, MinLength } from 'class-validator';

export default class LoginDTO {
  @IsString()
  @MinLength(15)
  number_card: string;

  @IsPositive()
  code: number;

  @IsString()
  @Length(4, 4)
  password: string;
}
