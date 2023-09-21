import { Injectable } from '@nestjs/common';
import TransactionRepository from '../repository/TransactionRepository';
import DepositMoneyAccountService from '../../account/services/DepositMoney-account';
import UuidManager from '../../common/utils/UuidManager';
import RequestTransactionDTO from '../dto/request-transaction.dto';
import DeleteTransactionService from './Delete-transaction';
import FindOneCreditcardService from '../../creditcard/services/FindOne-creditcard';
import CreditCardInterface from '../../creditcard/interfaces/creditcard.interface';
import AccountRepository from '../../account/repository/account.repository';
import { TYPE_TRANSACTION } from '../enums/type-transaction.enum';
import TransacionInterface from '../interfaces/transaction.interface';

@Injectable()
export default class DepositTransactionService {
  constructor(
    private readonly transactionRepository: TransactionRepository,
    private readonly depositMoneyAccountService: DepositMoneyAccountService,
    private readonly deleteTransactionService: DeleteTransactionService,
    private readonly findOneCreditcardService: FindOneCreditcardService,
    private readonly accountRepository: AccountRepository,
  ) {}
  async run(data: RequestTransactionDTO): Promise<TransacionInterface> {
    //get creditcard:
    const creditCard: CreditCardInterface =
      await this.findOneCreditcardService.run(data.number_card);

    const id_transaction = UuidManager.generate();

    const beforeMoney = creditCard.Account.money;

    try {
      //deposit money:
      await this.depositMoneyAccountService.run(
        creditCard.Account.number_account,
        {
          money: data.amount,
        },
      );
      //create transaction:
      const newTransaction = await this.transactionRepository.create({
        id: id_transaction,
        amount: data.amount,
        id_creditcard: creditCard.id,
        type_transaction: TYPE_TRANSACTION.DEPOSIT,
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
