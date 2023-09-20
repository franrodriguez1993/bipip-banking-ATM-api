import { Controller, Body, Patch, Param } from '@nestjs/common';
import { CreditcardService } from './creditcard.service';
import { changePassBodyDTO } from './dto/update-creditcard.dto';

@Controller('creditcard')
export class CreditcardController {
  constructor(private readonly creditcardService: CreditcardService) {}

  @Patch(':nc')
  update(@Param('nc') number_card: string, @Body() data: changePassBodyDTO) {
    return this.creditcardService.update(number_card, data.password);
  }
}
