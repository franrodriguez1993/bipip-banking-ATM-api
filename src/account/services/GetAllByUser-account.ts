import { Injectable } from '@nestjs/common';
import AccountRepository from '../repository/account.repository';
import { UserService } from '../../user/user.service';
import AccountInterface from '../interfaces/accountInterface';

@Injectable()
export default class GetAllByUserAccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly userService: UserService,
  ) {}

  async run(id: string): Promise<AccountInterface[]> {
    //check user
    await this.userService.findOne(id);
    return await this.accountRepository.getAllByUser(id);
  }
}
