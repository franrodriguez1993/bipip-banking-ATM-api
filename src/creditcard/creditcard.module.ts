import { Module } from '@nestjs/common';
import { CreditcardController } from './creditcard.controller';
import CreditCardRepository from './repository/creditcard.repository';
import FindOneCreditcardService from './services/FindOne-creditcard';
import UpdateCreditcardService from './services/Update-creditcard';

@Module({
  controllers: [CreditcardController],
  providers: [
    CreditCardRepository,
    FindOneCreditcardService,
    UpdateCreditcardService,
  ],
  exports: [FindOneCreditcardService],
})
export class CreditcardModule {}
