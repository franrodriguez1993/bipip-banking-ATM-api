import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import AccountRepository from './repository/account.repository';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [AccountService, AccountRepository],
})
export class AccountModule {}
