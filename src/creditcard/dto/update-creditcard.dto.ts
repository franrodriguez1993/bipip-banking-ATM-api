import { IsString, MaxLength, MinLength } from 'class-validator';

export class changePassBodyDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(4)
  password: string;
}
