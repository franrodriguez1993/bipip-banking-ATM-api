import { Module } from '@nestjs/common';
import { CreditcardService } from './creditcard.service';
import { CreditcardController } from './creditcard.controller';
import CreditCardRepository from './repository/creditcard.repository';

@Module({
  controllers: [CreditcardController],
  providers: [CreditcardService, CreditCardRepository],
})
export class CreditcardModule {}
