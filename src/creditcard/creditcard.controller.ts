import { Controller, Body, Patch, UseGuards, Req } from '@nestjs/common';
import { changePassBodyDTO } from './dto/update-creditcard.dto';
import UpdateCreditcardService from './services/Update-creditcard';
import AuthGuard from '../auth/guard/auth.guard';
import RequestWithUser from '../common/interface/requestWithUser';

@Controller('creditcard')
export class CreditcardController {
  constructor(
    private readonly updateCreditcardService: UpdateCreditcardService,
  ) {}

  @Patch()
  @UseGuards(AuthGuard)
  update(@Req() req: RequestWithUser, @Body() data: changePassBodyDTO) {
    const number_card = req.user.number_card;
    return this.updateCreditcardService.run(number_card, data.password);
  }
}
