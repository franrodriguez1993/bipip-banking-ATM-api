import { Model } from 'sequelize-typescript';
import Account from '../entities/account.entity';
import TypeAccount from '../entities/typeaccount.entity';
import { InferAttributes, InferCreationAttributes } from 'sequelize';

export default interface AccountInterface
  extends Model<InferAttributes<Account>>,
    InferCreationAttributes<Account> {
  TypeAccount?: TypeAccount;
}
