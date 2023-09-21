import { Module } from '@nestjs/common';
import AccountRepository from './repository/account.repository';
import { UserModule } from '../user/user.module';
import GetByNumberAccountService from './services/GetByNumber-account';
import GetAllByUserAccountService from './services/GetAllByUser-account';
import ExtractionMoneyAccountService from './services/ExtractionMoney-account';
import DepositMoneyAccountService from './services/DepositMoney-account';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [
    GetByNumberAccountService,
    GetAllByUserAccountService,
    ExtractionMoneyAccountService,
    DepositMoneyAccountService,
    AccountRepository,
  ],
  exports: [
    GetByNumberAccountService,
    GetAllByUserAccountService,
    ExtractionMoneyAccountService,
    DepositMoneyAccountService,
    AccountRepository,
  ],
})
export class AccountModule {}
