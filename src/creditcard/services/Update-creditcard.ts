import { BadRequestException, Injectable } from '@nestjs/common';
import CreditCardRepository from '../repository/creditcard.repository';
import HashPasswordManager from '../../common/utils/HashPasswordManager';
import FindOneCreditcardService from './FindOne-creditcard';
import CreditCardInterface from '../interfaces/creditcard.interface';

@Injectable()
export default class UpdateCreditcardService {
  constructor(
    private creditCardRepository: CreditCardRepository,
    private readonly findOneCreditcard: FindOneCreditcardService,
  ) {}

  async run(number_card: string, password: string): Promise<string> {
    //check card:
    const creditcard: CreditCardInterface =
      await this.findOneCreditcard.run(number_card);

    //compare password:
    await this.comparePasswords(password, creditcard.password);

    //hash pass:
    const hashPass = await HashPasswordManager.hash(password);

    const updateResponse: number[] = await this.creditCardRepository.updatePass(
      number_card,
      hashPass,
    );
    if (updateResponse[0] === 1) return 'Password changed';
    else return 'Password not changed';
  }

  private async comparePasswords(pass: string, hashPass: string) {
    const check = await HashPasswordManager.compare(pass, hashPass);
    if (check)
      throw new BadRequestException(
        'Password is equal to the current Password',
      );
  }
}
