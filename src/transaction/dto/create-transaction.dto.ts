import { TYPE_TRANSACTION } from '../enums/type-transaction.enum';

export class CreateTransactionDto {
  id: string;
  id_creditcard: string;
  amount: number;
  type_transaction: TYPE_TRANSACTION;
  date: string;
}
