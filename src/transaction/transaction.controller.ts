import { Controller, Post, Body } from '@nestjs/common';

import RequestTransactionDTO from './dto/request-transaction.dto';
import DepositTransactionService from './services/Deposit-transaction';
import ExtractionTransactionService from './services/Extraction-transaction';

@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly depositTransactionService: DepositTransactionService,
    private readonly extractionTransactionService: ExtractionTransactionService,
  ) {}

  @Post('/deposit')
  deposit(@Body() data: RequestTransactionDTO) {
    return this.depositTransactionService.run(data);
  }

  @Post('/extraction')
  extraction(@Body() data: RequestTransactionDTO) {
    return this.extractionTransactionService.run(data);
  }
}
