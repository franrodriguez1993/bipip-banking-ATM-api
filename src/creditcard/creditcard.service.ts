import { Injectable, NotFoundException } from '@nestjs/common';
import CreditCardRepository from './repository/creditcard.repository';
import Creditcard from './entities/creditcard.entity';
import HashPasswordManager from '../common/utils/HashPasswordManager';

@Injectable()
export class CreditcardService {
  constructor(private creditCardRepository: CreditCardRepository) {}

  async findOne(number_card: string): Promise<Creditcard> {
    const creditCard = await this.creditCardRepository.getByNumber(number_card);
    if (!creditCard) throw new NotFoundException('Credit card not found');
    return creditCard;
  }

  async update(number_card: string, password: string): Promise<string> {
    //check card:
    await this.findOne(number_card);

    //hash pass:
    const hashPass = await HashPasswordManager.hash(password);

    const updateResponse: number[] = await this.creditCardRepository.updatePass(
      number_card,
      hashPass,
    );
    if (updateResponse[0] === 1) return 'Password changed';
    else return 'Password not changed';
  }
}
