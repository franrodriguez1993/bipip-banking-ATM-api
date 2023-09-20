import { Injectable, NotFoundException } from '@nestjs/common';
import AccountRepository from '../repository/account.repository';
import Account from '../entities/account.entity';

@Injectable()
export default class GetByNumberAccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async run(number_account: string): Promise<Account> {
    const account = await this.accountRepository.getOneByNumber(number_account);
    if (!account) throw new NotFoundException('Account not found');
    return account;
  }
}
