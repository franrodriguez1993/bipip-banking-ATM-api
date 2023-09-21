import { Module } from '@nestjs/common';
import AccountRepository from './repository/account.repository';
import { UserModule } from '../user/user.module';
import GetByNumberAccountService from './services/GetByNumber-account';
import GetAllByUserAccountService from './services/GetAllByUser-account';
import ExtractionMoneyAccountService from './services/ExtractionMoney-account';
import DepositMoneyAccountService from './services/DepositMoney-account';
import AccountController from './account.controller';
import { AuthModule } from '../auth/auth.module';
import GetByCreditcardService from './services/GetByCard-account';
import { CreditcardModule } from '../creditcard/creditcard.module';

@Module({
  imports: [UserModule, AuthModule, CreditcardModule],
  controllers: [AccountController],
  providers: [
    GetByNumberAccountService,
    GetAllByUserAccountService,
    ExtractionMoneyAccountService,
    DepositMoneyAccountService,
    GetByCreditcardService,
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
