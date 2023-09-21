import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { Model } from 'sequelize-typescript';
import Transaction from '../entities/transaction.entity';
import Creditcard from '../../creditcard/entities/creditcard.entity';

export default interface TransacionInterface
  extends Model<InferAttributes<Transaction, { omit: 'id' }>>,
    InferCreationAttributes<Transaction, { omit: 'id' }> {
  id: string;
  CreditCard?: Creditcard;
}
