import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import AccountRepository from './repository/account.repository';
import Account from './entities/account.entity';
import { UserService } from '../user/user.service';
import AccountInterface from './interfaces/accountInterface';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(
    private accountRepository: AccountRepository,
    private userService: UserService,
  ) {}

  // /**  GET ACCOUNT BY NUMBER  **/
  // async getByNumber(number_account: string): Promise<Account> {
  //   const account = await this.accountRepository.getOneByNumber(number_account);
  //   if (!account) throw new NotFoundException('Account not found');
  //   return account;
  // }

  /**  GET ALL BY USER **/

  // async getAllByUser(id: string): Promise<Account[]> {
  //   //check user
  //   await this.userService.findOne(id);
  //   return await this.accountRepository.getAllByUser(id);
  // }

  /**  EXTRACTION  **/
  // async extraction(
  //   number_account: string,
  //   data: UpdateAccountDto,
  // ): Promise<string> {
  //   //check for account:
  //   const account: AccountInterface = await this.getByNumber(number_account);

  //   //check limit extraction account:
  //   this.checkLimitAccount(account.TypeAccount.max_extraction, data.money);

  //   //check available money:
  //   this.checkMoneyAvailable(data.money, account.money);

  //   //update:
  //   const previousMoney = account.money;
  //   const actualMoney =
  //     parseFloat(account.money.toString()) - parseFloat(data.money.toString());

  //   const resUpdate = await this.accountRepository.updateMoneyAccount(
  //     number_account,
  //     actualMoney,
  //   );
  //   if (resUpdate[0] !== 0) {
  //     return `Money extracted. Previous amount: ${previousMoney}. Actual amount:${actualMoney} `;
  //   } else return 'Extraction failed';
  // }

  /** DEPOSIT **/
  // async deposit(
  //   number_account: string,
  //   data: UpdateAccountDto,
  // ): Promise<string> {
  //   //check for account:
  //   const account: AccountInterface = await this.getByNumber(number_account);

  //   //update:
  //   const previousMoney = account.money;
  //   const actualMoney =
  //     parseFloat(account.money.toString()) + parseFloat(data.money.toString());

  //   const resUpdate = await this.accountRepository.updateMoneyAccount(
  //     number_account,
  //     actualMoney,
  //   );
  //   if (resUpdate[0] !== 0) {
  //     return `Money extracted. Previous amount: ${previousMoney}. Actual amount:${actualMoney} `;
  //   } else return 'Extraction failed';
  // }

  // /**  CHECK LIMIT ACCOUNT EXTRACTION  **/
  // private checkLimitAccount(limit: number, amountExtraction: number) {
  //   if (amountExtraction > limit)
  //     throw new BadRequestException('Account limit extraction exceeded');
  // }

  // /** CHECK MONEY AVAILABLE **/

  // private checkMoneyAvailable(extraction: number, availableMoney: number) {
  //   if (extraction > availableMoney)
  //     throw new BadRequestException('Insufficient money');
  // }
}
