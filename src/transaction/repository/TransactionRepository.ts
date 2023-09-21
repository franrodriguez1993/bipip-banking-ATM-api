import paginatedDataList from '../../common/interface/paginatedDataList';
import PaginationManager from '../../common/utils/PaginationManager';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import Transaction from '../entities/transaction.entity';
import TransacionInterface from '../interfaces/transaction.interface';

export default class TransactionRepository {
  /**  CREATE TRANSACTION  **/
  async create(data: CreateTransactionDto): Promise<TransacionInterface> {
    return await Transaction.create({
      id: data.id,
      id_creditcard: data.id_creditcard,
      amount: data.amount,
      type_transaction: data.type_transaction,
      date: data.date,
    });
  }

  /**  LIST TRANSACTIONS  **/
  async list(
    id_creditcard: string,
    page: number,
    size: number,
  ): Promise<paginatedDataList> {
    const { limit, offset } = PaginationManager.pageDetermination(page, size);

    const list = await Transaction.findAndCountAll({
      where: { id_creditcard },
      limit,
      offset,
    });

    return PaginationManager.paginatedData(list, page, limit);
  }

  /**  DELETE TRANSACTION  **/
  async deleteTransaction(id: string): Promise<boolean> {
    const del = await Transaction.destroy({ where: { id } });
    if (del !== 0) return true;
    else return false;
  }
}
