import { Controller, Body, Patch, Param } from '@nestjs/common';
import { changePassBodyDTO } from './dto/update-creditcard.dto';
import UpdateCreditcardService from './services/Update-creditcard';

@Controller('creditcard')
export class CreditcardController {
  constructor(
    private readonly updateCreditcardService: UpdateCreditcardService,
  ) {}

  @Patch(':nc')
  update(@Param('nc') number_card: string, @Body() data: changePassBodyDTO) {
    return this.updateCreditcardService.run(number_card, data.password);
  }
}
