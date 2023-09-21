import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';

import RequestTransactionDTO from './dto/request-transaction.dto';
import DepositTransactionService from './services/Deposit-transaction';
import ExtractionTransactionService from './services/Extraction-transaction';
import AuthGuard from '../auth/guard/auth.guard';
import RequestWithUser from '../common/interface/requestWithUser';

@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly depositTransactionService: DepositTransactionService,
    private readonly extractionTransactionService: ExtractionTransactionService,
  ) {}

  @Post('/deposit')
  @UseGuards(AuthGuard)
  deposit(@Req() req: RequestWithUser, @Body() data: RequestTransactionDTO) {
    data.number_card = req.user.number_card;
    return this.depositTransactionService.run(data);
  }

  @Post('/extraction')
  @UseGuards(AuthGuard)
  extraction(@Req() req: RequestWithUser, @Body() data: RequestTransactionDTO) {
    data.number_card = req.user.number_card;
    return this.extractionTransactionService.run(data);
  }
}
