import { Injectable } from '@nestjs/common';
import ExtractionMoneyAccountService from '../../account/services/ExtractionMoney-account';
import AccountRepository from '../../account/repository/account.repository';
import DeleteTransactionService from './Delete-transaction';
import FindOneCreditcardService from '../../creditcard/services/FindOne-creditcard';
import TransactionRepository from '../repository/TransactionRepository';
import RequestTransactionDTO from '../dto/request-transaction.dto';
import TransacionInterface from '../interfaces/transaction.interface';
import CreditCardInterface from '../../creditcard/interfaces/creditcard.interface';
import UuidManager from '../../common/utils/UuidManager';
import { TYPE_TRANSACTION } from '../enums/type-transaction.enum';

@Injectable()
export default class ExtractionTransactionService {
  constructor(
    private readonly extractionMoneyAccountService: ExtractionMoneyAccountService,
    private readonly accountRepository: AccountRepository,
    private readonly deleteTransactionService: DeleteTransactionService,
    private readonly findOneCreditcardService: FindOneCreditcardService,
    private readonly transactionRepository: TransactionRepository,
  ) {}

  async run(data: RequestTransactionDTO): Promise<TransacionInterface> {
    //get creditcard:
    const creditCard: CreditCardInterface =
      await this.findOneCreditcardService.run(data.number_card);

    const id_transaction = UuidManager.generate();

    const beforeMoney = creditCard.Account.money;

    try {
      //extract money:
      await this.extractionMoneyAccountService.run(
        creditCard.Account.number_account,
        { money: data.amount },
      );

      //create transaction:
      const newTransaction = await this.transactionRepository.create({
        id: id_transaction,
        amount: data.amount,
        id_creditcard: creditCard.id,
        type_transaction: TYPE_TRANSACTION.EXTRACTION,
        date: new Date().toUTCString(),
      });

      return newTransaction;
    } catch (error) {
      //rollback:
      await this.accountRepository.updateMoneyAccount(
        creditCard.number_account,
        beforeMoney,
      );
      await this.deleteTransactionService.run(id_transaction);

      throw error;
    }
  }
}
