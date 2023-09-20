import { Injectable } from '@nestjs/common';
import AccountRepository from '../repository/account.repository';
import AccountInterface from '../interfaces/accountInterface';
import FindOneUserService from '../../user/services/FindOne-user';

@Injectable()
export default class GetAllByUserAccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly findOneUser: FindOneUserService,
  ) {}

  async run(id: string): Promise<AccountInterface[]> {
    //check user
    await this.findOneUser.run(id);
    return await this.accountRepository.getAllByUser(id);
  }
}
