import { Injectable } from '@nestjs/common';
import GetByNumberAccountService from './GetByNumber-account';
import FindOneCreditcardService from '../../creditcard/services/FindOne-creditcard';
import CreditCardInterface from '../../creditcard/interfaces/creditcard.interface';

@Injectable()
export default class GetByCreditcardService {
  constructor(
    private readonly getByNumberAccountService: GetByNumberAccountService,
    private readonly findOneCreditcardService: FindOneCreditcardService,
  ) {}

  async run(number_card: string) {
    //find creditcard:
    const creditCard: CreditCardInterface =
      await this.findOneCreditcardService.run(number_card);

    //find account:
    return await this.getByNumberAccountService.run(creditCard.number_account);
  }
}
