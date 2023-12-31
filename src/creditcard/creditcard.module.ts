import { Module, forwardRef } from '@nestjs/common';
import { CreditcardController } from './creditcard.controller';
import CreditCardRepository from './repository/creditcard.repository';
import FindOneCreditcardService from './services/FindOne-creditcard';
import UpdateCreditcardService from './services/Update-creditcard';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [CreditcardController],
  providers: [
    CreditCardRepository,
    FindOneCreditcardService,
    UpdateCreditcardService,
  ],
  exports: [FindOneCreditcardService],
})
export class CreditcardModule {}
