import { BadRequestException, Injectable } from '@nestjs/common';
import LoginDTO from './dto/LoginDTO';
import FindOneCreditcardService from '../creditcard/services/FindOne-creditcard';
import CreditCardInterface from '../creditcard/interfaces/creditcard.interface';
import HashPasswordManager from '../common/utils/HashPasswordManager';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly findOneCreditcardService: FindOneCreditcardService,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: LoginDTO) {
    //get creditcard:
    const creditCard: CreditCardInterface =
      await this.findOneCreditcardService.run(data.number_card);

    //compare password:
    await this.checkPassword(data.password, creditCard.password);

    //check code:
    this.checkCode(data.code, creditCard.code);

    //create token:
    const payload = { number_card: creditCard.number_card };
    const jwt = await this.jwtService.signAsync(payload);

    return { jwt, number_card: creditCard.number_card };
  }

  private async checkPassword(pass: string, hashpass: string) {
    const check = await HashPasswordManager.compare(pass, hashpass);
    if (!check) throw new BadRequestException('Incorrect password');
  }

  private checkCode(code: number, ccCode: number) {
    if (code !== ccCode)
      throw new BadRequestException('Incorrect security code');
  }
}
