import { Injectable } from '@nestjs/common';
import AccountRepository from '../repository/account.repository';
import { UpdateAccountDto } from '../dto/update-account.dto';
import AccountInterface from '../interfaces/accountInterface';
import GetByNumberAccountService from './GetByNumber-account';

@Injectable()
export default class DepositMoneyAccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly getByNumberAccount: GetByNumberAccountService,
  ) {}

  async run(number_account: string, data: UpdateAccountDto): Promise<string> {
    //check for account:
    const account: AccountInterface =
      await this.getByNumberAccount.run(number_account);

    //update:
    const previousMoney = account.money;
    const actualMoney =
      parseFloat(account.money.toString()) + parseFloat(data.money.toString());

    const resUpdate = await this.accountRepository.updateMoneyAccount(
      number_account,
      actualMoney,
    );
    if (resUpdate[0] !== 0) {
      return `Money extracted. Previous amount: ${previousMoney}. Actual amount:${actualMoney} `;
    } else return 'Extraction failed';
  }
}
