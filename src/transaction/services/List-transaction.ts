import { Injectable } from '@nestjs/common';
import FindOneCreditcardService from '../../creditcard/services/FindOne-creditcard';
import TransactionRepository from '../repository/TransactionRepository';
import paginatedDataList from '../../common/interface/paginatedDataList';
import CreditCardInterface from '../../creditcard/interfaces/creditcard.interface';

@Injectable()
export default class ListTransactionService {
  constructor(
    private readonly findOneCreditcardService: FindOneCreditcardService,
    private readonly transactionRepository: TransactionRepository,
  ) {}

  async run(
    number_card: string,
    page: number,
    size: number,
  ): Promise<paginatedDataList> {
    //check creditcard:
    const creditCard: CreditCardInterface =
      await this.findOneCreditcardService.run(number_card);

    return await this.transactionRepository.list(creditCard.id, page, size);
  }
}
