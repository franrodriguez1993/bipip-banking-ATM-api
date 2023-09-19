import { Injectable, NotFoundException } from '@nestjs/common';
import AccountRepository from './repository/account.repository';
import Account from './entities/account.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AccountService {
  constructor(
    private accountRepository: AccountRepository,
    private userService: UserService,
  ) {}

  async getByNumber(number_account: string): Promise<Account> {
    const account = await this.accountRepository.getOneByNumber(number_account);
    if (!account) throw new NotFoundException('Account not found');
    return account;
  }

  async getAllByUser(id: string): Promise<Account[]> {
    //check user
    await this.userService.findOne(id);

    return await this.accountRepository.getAllByUser(id);
  }
}
