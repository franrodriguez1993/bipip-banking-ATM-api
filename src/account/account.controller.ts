import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import AuthGuard from '../auth/guard/auth.guard';
import RequestWithUser from '../common/interface/requestWithUser';
import GetByCreditcardService from './services/GetByCard-account';

@Controller('account')
export default class AccountController {
  constructor(
    private readonly getByCreditcardService: GetByCreditcardService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  getAccount(@Req() req: RequestWithUser) {
    const number_card = req.user.number_card;
    return this.getByCreditcardService.run(number_card);
  }
}
