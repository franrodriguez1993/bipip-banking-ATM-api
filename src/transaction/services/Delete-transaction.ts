import { BadRequestException, Injectable } from '@nestjs/common';
import TransactionRepository from '../repository/TransactionRepository';
import UuidManager from '../../common/utils/UuidManager';

@Injectable()
export default class DeleteTransactionService {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async run(id: string): Promise<string> {
    if (!UuidManager.check(id)) {
      throw new BadRequestException('Invalid Uuid');
    }

    const del = await this.transactionRepository.deleteTransaction(id);
    if (!del) return 'Transaction not deleted';
    return 'Transaction deleted';
  }
}
