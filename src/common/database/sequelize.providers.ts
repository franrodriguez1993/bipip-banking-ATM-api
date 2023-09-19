import { Sequelize } from 'sequelize-typescript';
import { environmentVariables } from '../config/environment.variables';
import User from '../../user/entities/user.entity';
import Address from '../../user/entities/address.entity';
import TypeAccount from '../../account/entities/typeaccount.entity';
import Account from '../../account/entities/account.entity';

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
      });
      sequelize.addModels([User, Address, TypeAccount, Account]),
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
};
