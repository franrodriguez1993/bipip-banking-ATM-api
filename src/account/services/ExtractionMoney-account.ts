import { BadRequestException, Injectable } from '@nestjs/common';
import AccountRepository from '../repository/account.repository';
import { UpdateAccountDto } from '../dto/update-account.dto';
import AccountInterface from '../interfaces/accountInterface';
import GetByNumberAccountService from './GetByNumber-account';

@Injectable()
export default class ExtractionMoneyAccountService {
  constructor(
    private accountRepository: AccountRepository,
    private getByNumberAccount: GetByNumberAccountService,
  ) {}

  async run(number_account: string, data: UpdateAccountDto): Promise<string> {
    //check for account:
    const account: AccountInterface =
      await this.getByNumberAccount.run(number_account);

    //check limit extraction account:
    this.checkLimitAccount(account.TypeAccount.max_extraction, data.money);

    //check available money:
    this.checkMoneyAvailable(data.money, account.money);

    //update:
    const previousMoney = account.money;
    const actualMoney =
      parseFloat(account.money.toString()) - parseFloat(data.money.toString());

    const resUpdate = await this.accountRepository.updateMoneyAccount(
      number_account,
      actualMoney,
    );
    if (resUpdate[0] !== 0) {
      return `Money extracted. Previous amount: ${previousMoney}. Actual amount:${actualMoney} `;
    } else return 'Extraction failed';
  }

  /**  CHECK LIMIT ACCOUNT EXTRACTION  **/
  private checkLimitAccount(limit: number, amountExtraction: number) {
    if (amountExtraction > limit)
      throw new BadRequestException('Account limit extraction exceeded');
  }

  /** CHECK MONEY AVAILABLE **/

  private checkMoneyAvailable(extraction: number, availableMoney: number) {
    if (extraction > availableMoney)
      throw new BadRequestException('Insufficient money');
  }
}
