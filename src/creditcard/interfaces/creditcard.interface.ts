import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { Model } from 'sequelize-typescript';
import Creditcard from '../entities/creditcard.entity';
import User from '../../user/entities/user.entity';
import AccountInterface from '../../account/interfaces/accountInterface';

export default interface CreditCardInterface
  extends Model<InferAttributes<Creditcard, { omit: 'id' }>>,
    InferCreationAttributes<Creditcard, { omit: 'id' }> {
  id: string;
  Account?: AccountInterface;
  User?: User;
}
