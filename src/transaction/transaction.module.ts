import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { CreditcardModule } from '../creditcard/creditcard.module';
import { AccountModule } from '../account/account.module';
import TransactionRepository from './repository/TransactionRepository';
import DeleteTransactionService from './services/Delete-transaction';
import DepositTransactionService from './services/Deposit-transaction';
import ExtractionTransactionService from './services/Extraction-transaction';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [CreditcardModule, AccountModule, AuthModule],
  controllers: [TransactionController],
  providers: [
    TransactionRepository,
    DeleteTransactionService,
    DepositTransactionService,
    ExtractionTransactionService,
  ],
})
export class TransactionModule {}
