import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';

import RequestTransactionDTO from './dto/request-transaction.dto';
import DepositTransactionService from './services/Deposit-transaction';
import ExtractionTransactionService from './services/Extraction-transaction';
import AuthGuard from '../auth/guard/auth.guard';
import RequestWithUser from '../common/interface/requestWithUser';
import ListTransactionService from './services/List-transaction';

@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly depositTransactionService: DepositTransactionService,
    private readonly extractionTransactionService: ExtractionTransactionService,
    private readonly listTransactionService: ListTransactionService,
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

  @Get('')
  @UseGuards(AuthGuard)
  list(@Req() req: RequestWithUser) {
    const number_card = req.user.number_card;
    const page = parseInt(req.query.page as string);
    const size = parseInt(req.query.size as string);

    return this.listTransactionService.run(number_card, page, size);
  }
}
