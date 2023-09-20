import { Injectable, NotFoundException } from '@nestjs/common';
import CreditCardRepository from '../repository/creditcard.repository';
import Creditcard from '../entities/creditcard.entity';

@Injectable()
export default class FindOneCreditcardService {
  constructor(private creditCardRepository: CreditCardRepository) {}

  async run(number_card: string): Promise<Creditcard> {
    const creditCard = await this.creditCardRepository.getByNumber(number_card);
    if (!creditCard) throw new NotFoundException('Credit card not found');
    return creditCard;
  }
}
