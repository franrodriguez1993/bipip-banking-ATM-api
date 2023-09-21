import { Sequelize } from 'sequelize-typescript';
import { environmentVariables } from '../config/environment.variables';
import User from '../../user/entities/user.entity';
import Address from '../../user/entities/address.entity';
import TypeAccount from '../../account/entities/typeaccount.entity';
import Account from '../../account/entities/account.entity';
import Creditcard from '../../creditcard/entities/creditcard.entity';
import Transaction from '../../transaction/entities/transaction.entity';

export const sequelizeProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: environmentVariables.database.db_host,
        port: parseInt(environmentVariables.database.db_port),
        username: environmentVariables.database.db_user,
        password: environmentVariables.database.db_pass,
        database: environmentVariables.database.db_name,
        logging: false,
      });
      sequelize.addModels([
        User,
        Address,
        TypeAccount,
        Account,
        Creditcard,
        Transaction,
      ]),
        await sequelize.sync();
      return sequelize;
    },
  },
];

export const setupSequelize = (sequelize: Sequelize) => {
  //user-address
  User.hasOne(Address, { foreignKey: 'id_user', onDelete: 'CASCADE' });
  Address.belongsTo(User, { foreignKey: 'id_user', onDelete: 'CASCADE' });

  //account-type_account
  TypeAccount.hasMany(Account, { foreignKey: 'id_type' });
  Account.belongsTo(TypeAccount, { foreignKey: 'id_type' });

  //account-user
  User.hasMany(Account, { foreignKey: 'id_user' });
  Account.belongsTo(User, { foreignKey: 'id_user' });

  //user-creditcard
  User.hasMany(Creditcard, { foreignKey: 'id_user' });
  Creditcard.belongsTo(User, { foreignKey: 'id_user' });

  //account-creditcard
  Account.hasMany(Creditcard, { foreignKey: 'number_account' });
  Creditcard.belongsTo(Account, { foreignKey: 'number_account' });

  //creditcard-transaction:
  Creditcard.hasMany(Transaction, { foreignKey: 'id_creditcard' });
  Transaction.belongsTo(Creditcard, { foreignKey: 'id_creditcard' });
};
